import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

const Code = (props) => (
    <SyntaxHighlighter language={props.language} style={{overflow: 'scroll'}} useInlineStyles={false}>
        {props.children}
    </SyntaxHighlighter>
);

Code.defaultProps = {
    language: 'jsx'
};

export default Code;
