import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

const Code = (props) => {
    const codeElementProps = props.children.props;

    return (
        <SyntaxHighlighter language={props.language} style={{overflow: 'scroll'}} useInlineStyles={false}>
            <>{codeElementProps.children}</>
        </SyntaxHighlighter>
    );
};

Code.defaultProps = {
    language: 'jsx'
};

export default Code;
