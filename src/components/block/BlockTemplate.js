import React from 'react';
import { getElementDescriptors } from './../../services/blockEementsFactory';
import templateParserService from '../../services/templateParserService';

export default ({ isEdit, model, template, modelChanged }) => {
    function checkNodeForReactElement(node) {
        return getElementDescriptors().find(e => node.className && node.className.indexOf(e.selector) >= 0);
    }

    function getInitiallValue(descriptor, context) {
        if (model[descriptor.modelName]) {
            const field = model[descriptor.modelName];
            if (field instanceof Array) {
                const index = context.propertyIndexes[descriptor.name];
                return field.length > index ? field[index] : null;
            }
            return field;
        }
    }

    function setModelValue(descriptor, value, key) {
        if (model[descriptor.modelName] && model[descriptor.modelName] instanceof Array) {
            model[descriptor.modelName][key] = value;
        } else {
            model[descriptor.modelName] = value;
        }
        modelChanged();
    }

    function getReactElement(node, context) {
        const childDescriptor = checkNodeForReactElement(node);
        if (node.children.length === 0 || childDescriptor) {
            let child = null;
            if (childDescriptor) {
                child = childDescriptor.factory(context,
                    node,
                    getInitiallValue(childDescriptor, context),
                    (value, key) => setModelValue(childDescriptor, value, key),
                    isEdit);
            }
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className, key: context.propertyIndexes.divIndex++ }, child ? [child] : undefined);
        } else {
            const children = [];
            for (let i = 0; i < node.children.length; i++) {
                children.push(getReactElement(node.children[i], context));
            }
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className, key: context.propertyIndexes.divIndex++ }, children);
        }
    }

    const propertyIndexes = { divIndex: 0 }
    getElementDescriptors().forEach(e => {
        propertyIndexes[e.name] = 0;
    });
    const doc = templateParserService.parse(template.code);
    return (
        getReactElement(doc.body.children[0], { propertyIndexes })
    );
}