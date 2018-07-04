import React, { Component } from 'react';
import TemplateButton from './TemplateButton';

class TemplateSelector extends Component {
    constructor(props) {
        super(props);
        this.templateSelected = this.templateSelected.bind(this);
    }

    templateSelected(template) {
        this.props.onTemplateSelected(template);
    }

    render() {
        return (
            <div className="template-selector">
                {this.props.templates.length > 0 ?
                    this.props.templates.map((template, index) => {
                        return <TemplateButton
                            template={template}
                            selected={template === this.props.selectedTemplate}
                            key={index}
                            onTemplateClicked={this.templateSelected}>
                        </TemplateButton>
                    }) : ''}
            </div>
        );
    }
}

export default TemplateSelector;
