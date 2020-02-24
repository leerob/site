import title from 'title';
import React from 'react';

const EXCLUDED_WORDS = [
    '1Password',
    'About',
    'API',
    'APIs',
    'CircleCI',
    'CSS',
    'dart_dev',
    'GraphQL',
    'HDD',
    'iPhone',
    'iTerm',
    'MDX',
    'IDE',
    'OverReact',
    'SWR',
    'QC35',
    'UI',
    'USB',
    'UX',
    'VSCode',
    'w_flux'
];

export default (text) => {
    // Autolinked headings from MDX
    if (typeof text !== 'string') {
        return React.cloneElement(text, {
            ...text.props,
            children: title(text.props.children, {
                special: EXCLUDED_WORDS
            })
        });
    }

    return title(text, {
        special: EXCLUDED_WORDS
    });
};
