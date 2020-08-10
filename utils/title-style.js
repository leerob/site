const remarkCapitalize = require('remark-capitalize');

const excludedWords = [
  '1Password',
  'About',
  'API',
  'APIs',
  'CircleCI',
  'CMS',
  'CSS',
  'dart_dev',
  'GraphQL',
  'HDD',
  'IDE',
  'iPhone',
  'iTerm',
  'MDX',
  'NoSQL',
  'OverReact',
  'QC35',
  'REST',
  'SQL',
  'SWR',
  'UI',
  'USB',
  'UX',
  'VSCode',
  'w_flux'
];

module.exports = remarkCapitalize({
  special: excludedWords
});
