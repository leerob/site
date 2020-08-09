const remarkCapitalize = require('remark-capitalize');

const excludedWords = [
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
  'w_flux',
  'SQL',
  'NoSQL',
  'REST'
];

module.exports = remarkCapitalize({
  special: excludedWords
});
