import React from 'react';

export default ({onSaveClicked, onCancelClicked, onDeleteClicked, onTemplateClicked, onBoldClicked}) => {
    const buttons = [];

    // if (onBoldClicked)
    //     buttons.push(<div className="button" key="0" onClick={onBoldClicked}><b>B</b></div>);
    if (onTemplateClicked)
        buttons.push(<div className="button" key="1" onClick={onTemplateClicked}>T</div>);
    if (onSaveClicked)
        buttons.push(<div className="button green" key="2" onClick={onSaveClicked}>Save</div>);
    if (onDeleteClicked)
        buttons.push(<div className="button red" key="3" onClick={onDeleteClicked}>Delete</div>);
    if (onCancelClicked)
        buttons.push(<div className="button" key="4" onClick={onCancelClicked}>Cancel</div>);            

    return (
        <div className="buttons">
            {buttons}
        </div>
    );    
}


