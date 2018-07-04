import React from 'react';
import './Code.css'

import { UnControlled as CodeMirror } from 'react-codemirror2';

require('./../../../../node_modules/codemirror/lib/codemirror.css');
require('./../../../../node_modules/codemirror/theme/material.css');
require('./../../../../node_modules/codemirror/theme/neat.css');
require('./../../../../node_modules/codemirror/mode/htmlmixed/htmlmixed.js');
require('./../../../../node_modules/codemirror/mode/javascript/javascript.js');

export default ({ code, onCodeChanged }) => {
    return (
        <CodeMirror
            className="code"
            value={code}
            autoCursor={false}
            options={{
                lineWrapping: true,
                mode: 'text/html',
                theme: 'material',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
                //TODO fix position reset
                onCodeChanged(value);
            }}
        />
    );
}
