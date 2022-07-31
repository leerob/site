/** @type {import('tailwindcss').Config} */

const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      signal: 'rgb(255 49 46 / 95%)',
      'signal-dark': 'rgb(0 206 209 / 95%)',
      'signal-opaque': 'rgb(255 49 46 / 85%)',
      'signal-opaque-dark': 'rgb(0 206 209 / 85%)',
      gray: colors.slate,
      black: 'rgb(0 0 0 / 99%)',
      white: 'rgb(255 255 255 / 99%)',
      code: {
        emerald: '#10b981',
        yellow: '#eab308',
        pink: '#EC4899',
        blue: '#3b82f6',
        purple: '#A855F7',
        green: '#22c55e'
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
      }),
      scale: {
        175: '1.75',
        200: '2.00'
      }
    }
  },

  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
