import React from 'react';

export default ({onTemplateClicked, selected, template}) => {
    const onClickHandler = (event) => {
        onTemplateClicked(template);
    }
    return (
        <div className={`template-button ${selected ? 'selected' : ''}`}
            onClick={onClickHandler}
             dangerouslySetInnerHTML={{__html: template.code}}/>
    );
}