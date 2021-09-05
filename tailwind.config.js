module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      minHeight: {
        'screen-50': '50vh',
        'screen-80': '80vh'
      },
      minWidth: {
        '80': '20rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
