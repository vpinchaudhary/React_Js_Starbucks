const defaultColors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        50: '#F1F8F5',
        100: '#D4E9E2',
        200: '#008248',
        300: '#00653E',
        400: '#1E3932',
      },
      secondary: {
        50: '#F7F7F7',
        100: '#F3F1E7',
        200: '#CBA258',
      },
      white: defaultColors.white,
      gray: defaultColors.gray,
      black: defaultColors.black,
    },
    extend: {
      fontFamily: {
        sodo: 'sodo',
      },
      backgroundImage: (theme) => ({
        mobile: "url('./images/mobile-background.webp')",
        desktop: "url('./images/desktop-background.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
