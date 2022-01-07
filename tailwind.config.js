module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        900: '#7180BF',
        100: '#7180BF',
      },
      gray: {
        600: '#D8D8D8',
        500: '#F7F7F7',
        200: '#707070',
        100: '#CCD1E1',
      },
      indigo: {
        100: '#CBD0E1',
      },
      white: '#ffffff',
      green: '#4D8355',
    },
    black: {
      900: '#000000',
      600: '#4B4B4B',
    },
    yellow: {
      900: '#D8BD5E',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        head: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}