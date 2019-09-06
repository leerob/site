import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

const Code = (props) => {
    const codeElementProps = props.children.props;
    const languageHighlightClassName = codeElementProps.props.className;

    return (
        <SyntaxHighlighter language={props.language} style={{overflow: 'scroll'}} useInlineStyles={false}>
            <code className={languageHighlightClassName}>{codeElementProps.children}</code>
        </SyntaxHighlighter>
    );
};

Code.defaultProps = {
    language: 'jsx'
};

export default Code;
