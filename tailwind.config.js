/** @type {import('tailwindcss').Config} */

const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      signal: 'rgb(255 0 94 / 95%)',
      'signal-opaque': 'rgb(255 0 94 / 65%)',
      gray: colors.slate,
      black: 'rgb(0 0 0 / 99%)',
      white: 'rgb(255 255 255 / 99%)',
      code: {
        emerald: '#10b981',
        yellow: '#eab308',
        pink: '#ec4899',
        blue: '#3b82f6',
        purple: '#a855f7',
        green: '#a855f7'
      }
    },
    fontFamily: {
      sans: ['IBM Plex Sans', ...fontFamily.sans],
      mono: ['IBM Plex Mono', ...fontFamily.mono]
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
