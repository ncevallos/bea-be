module.exports = {
    important: true,
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        'sans': ['Roboto']
      },
      filter: { // defaults to {}
        'none': 'none',
        'grayscale': 'grayscale(1)',
        'invert': 'invert(1)',
        'sepia': 'sepia(1)',
      },
      backdropFilter: { // defaults to {}
        'none': 'none',
        'blur': 'blur(20px)',
      },
      extend: {
        colors: {
          beaPurple: '#AD79E2',
          beaPurpleCorrected: '#8037CA',
          beaDarkPurple: '#561D90',
          beaGrey: '#F2F2F2',
          beaIconGrey: '#666666',
          beaBlue: '#E4F3FE',
          beaTextGrey: '#424142',
          beaTextLightGrey: '#999999',
          beaLightBlue: '#D7ECFC',
          beaBorderGrey: '#BBBABA'
        },
        backgroundImage: theme => ({
        //   'arc': "url('./img/arc.png')",
        })
      },
    },
    variants: {
      extend: {
        padding: ['group-hover'],
        transform: ['hover', 'focus', 'group-hover'],
        scale: ['hover', 'group-hover'],
      }
    },
    plugins: [
      require('tailwindcss-filters'),
    ],
  }
  