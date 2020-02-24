import title from 'title';

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

export default (text) =>
    title(text, {
        special: EXCLUDED_WORDS
    });
