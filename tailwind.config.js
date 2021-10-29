module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      red: '#e50914',
      black: 'black',
      white: 'white',
      darkWhite: 'rgba(255, 255, 255, 0.75)',
      gray: 'rgba(109, 109, 110, 0.7)',
      darkGray: 'rgba(109, 109, 110, 0.4)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
