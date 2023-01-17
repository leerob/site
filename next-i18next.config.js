const path = require('path');

const i18nConfig = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  }
  ,
  nsSeparator: '.',
  localePath: path.resolve('./public/locales'),
  ns: ['common'],
}

module.exports = i18nConfig;