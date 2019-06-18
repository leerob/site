import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

import {spacing} from '../styles/vars';

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: "Fira Sans";
        src: url("/static/fonts/FiraSans-Bold.ttf");
        font-weight: bold;
        font-display: auto;
	    font-style: normal;
    }
    
    @font-face {
        font-family: "Fira Sans";
        src: url("/static/fonts/FiraSans-Italic.ttf");
        font-weight: normal;
        font-display: auto;
	    font-style: italic;
    }

    @font-face {
        font-family: "Fira Sans";
        src: url("/static/fonts/FiraSans-Regular.ttf");
        font-weight: normal;
        font-display: auto;
	    font-style: normal;
    }

    ::selection {
        background-color: #ff5252;
        color: #fefefe;
    }
    
    html {
        box-sizing: border-box;
        font-family: Fira Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        min-width: 320px;
        scroll-behavior: smooth;

        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
    }

    body {
        background-color: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.primary};
        font-size: 15px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        line-height: 1.65;
        text-rendering: optimizeLegibility;
    }

    table {  
        color: #333;
        width: 100%; 
        border-collapse: 
        collapse; border-spacing: 0; 
    }
    
    td, th {  
        height: 30px; 
    }
    
    thead {
        background: #f5f5f5;
        border-radius: 5px;
        text-transform: uppercase;
        font-size: 0.9rem;
    }

    th {  
        font-weight: 500;
        text-align: left;
        padding: 5px;
    }
    
    td {  
        padding: 5px;
        text-align: left;
    }

    tr {
        border-bottom: 1px solid #ccc;
    }

    a {
        color: ${(props) => props.theme.primary};
        cursor: pointer;
    }

    p {
        margin: 1.5em 0;
        color: ${(props) => props.theme.primary};
    }

    code {
        background-color: ${(props) => props.theme.inlineCode};
        border-radius: 3px;
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 85%;
        padding: .2em .4em;
    }

    pre {
        line-height: 1.4em;
        margin: 0 0 ${spacing.normal};
        overflow-x: auto;
        padding: ${spacing.normal};
        white-space: pre;
        background: ${(props) => props.theme.code};

        code {
            padding: 0;
        }
    }

    hr {
        border: 0;
        margin: ${spacing.large};
        text-align: center;

        &::before {
            content: '...';
            display: inline-block;
            letter-spacing: 1em;
            line-height: 1;
        }
    }
    
    #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    
    @media (min-width: 768px) {
        body {
            font-size: 18px;
        }

        code, pre {
            font-size: 16px;
        }
    }
`;

export default GlobalStyle;
