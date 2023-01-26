/** @type {import('tailwindcss').Config} */

const { spacing, defaultTheme } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      active: 'rgb(255 49 46 / 95%)',
      gray: colors.slate,
      transparent: 'rgb(255 255 255 / 0%)',
      wakatime: {
        blue: '#2563EB',
        amber: '#D97706',
        fuchsia: '#A21CAF',
        indigo: '#4338CA'
      },
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
      sans: ['var(--font-sans)', 'sans-serif'],
      mono: ['var(--font-mono)', 'sans-serif']
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
