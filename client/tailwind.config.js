module.exports = {
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        'sans': ['Roboto']
      },
      extend: {
        colors: {
          beaPurple: '#AD79E2',
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
      }
    },
    plugins: [],
  }
  