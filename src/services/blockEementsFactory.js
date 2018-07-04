import React from 'react';
import Image from '../components/templateElements/Image';
import Title from '../components/templateElements/Title';
import Code from '../components/templateElements/Code';
import Text from '../components/templateElements/Text';

const image = { 
    name: 'Image', 
    modelName: 'images',
    selector: 't-image', 
    factory (context, node, initialValue, onValueChanged, isEdit) {
        const key = context.propertyIndexes[image.name]++;
        return React.createElement(Image, {
            key: key,
            image: initialValue,
            className: node.className,
            isEdit,
            onImageAdded: (image) => onValueChanged(image, key),
            onImageDeleted: () => onValueChanged(null, key)
        });
    } 
};
const text = { 
    name: 'Text', 
    modelName: 'texts',
    selector: 't-text', 
    factory (context, node, initialValue, onValueChanged) {
        const key = context.propertyIndexes[text.name]++;
        return React.createElement(Text, {
            key: key,
            text: initialValue,
            className: node.className,
            onTextChanged: (text) => onValueChanged(text, key)
        });
    } 
};
const code = {
    name: 'Code', 
    modelName: 'codes',
    selector: 't-code',
     factory(context, node, initialValue, onValueChanged) {
        const key = context.propertyIndexes[code.name]++;
        return React.createElement(Code, {
            key: key,
            code: initialValue,
            className: node.className,
            onCodeChanged: (value) => onValueChanged(value, key)
        });
    }
}     
const title = {
    name: 'Title', 
    modelName: 'titles',
    selector: 't-title', 
    factory(context, node, initialValue, onValueChanged) {
        const key = context.propertyIndexes[title.name]++;
        return React.createElement(Title, {
            key: context.propertyIndexes[title.name]++,
            title: initialValue,
            className: node.className,
            onChange: (value) => onValueChanged(value, key)
        });
    }
};

export function getElementDescriptors() {
    return [image, text, code, title];
}