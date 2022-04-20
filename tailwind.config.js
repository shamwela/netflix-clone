module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      red: '#e50914',
      black: 'black',
      white: 'white',
      'dark-white': 'rgba(255, 255, 255, 0.75)',
      gray: 'rgba(109, 109, 110, 0.7)',
      'dark-gray': 'rgba(109, 109, 110, 0.4)',
      'primary-background': '#141414',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
}
