const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ...defaultTheme.screens,
      xl: '1370px',
      sm: '420px',
      // css height media query
      'h-sm': { raw: '(min-height: 540px)' },
      'h-md': { raw: '(min-height: 668px)' },
      'h-lg': { raw: '(min-height: 924px)' }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        brand: {
          1: '#00C2FF',
          2: '#0070FF',
          3: '#1B262C',
          4: '#FF8310',
          5: '#F1FDFF',
          6: '#0F4C75',
          7: '#BBE1FA',
          8: '#4494CA',
          mag: {
            1: '#2b2b2b',
            2: '#1d1d1d',
            3: '#d9d9d9',
            4: '#f86a01'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
