import React from 'react';

import ContentEditable from 'react-contenteditable';

export default ({ title, onChange }) => {
    return (
        <ContentEditable
            className="text"
            html={title || ''}             // innerHTML of the editable div
            disabled={false}                    // use true to disable edition
            onChange={(event) => { onChange(event.target.value); }}      // handle innerHTML change
            key="title"
        />
    );
}
