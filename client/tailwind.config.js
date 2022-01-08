module.exports = {
    important: false,
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
       '75%': '75%',
      },
      fontFamily: {
        'sans': ['Roboto']
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
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
          beaLightPurple: '#7B48CB',
          beaGrey: '#F2F2F2',
          beaIconGrey: '#666666',
          beaBlue: '#E4F3FE',
          beaGreenBlue: '#037D8E',
          //beaLightBlue: '#C6E2F7',
          beaTextGrey: '#424142',
          beaTextLightGrey: '#999999',
          beaLightBlue: '#D7ECFC',
          beaOrange: '#FF9A08',
          beaDarkOrange: '#E56F06',
          beaStrongOrange: '#FFAD33',
          beaYellow: '#FFD00B',
          beaBlueGreen: '#11C5CE',
          beaDarkBlue: '#329CCC',
          beaBorderGrey: '#BBBABA',
          purpleGradientStart: '#6D508B',
          purpleGradientMiddle: '#AD79E2',
          purpleGradientEnd: '#B1D0F4',
          beaBlueText: '#056895',
          beaCyan: '#1A9FB2',
          beaLightGrey: '#EDEDED',
          beaBorderGrey: '#BBBABA',
        },
        spacing: {
          'gutter': '25px',
        },
        width: {
          'promo': '240px',
        },
        transitionProperty: {
          'spacing': 'margin, padding',
         },
        backgroundImage: theme => ({
             'planIllustration': "url('./img/plan-illustration.svg')",
             'beaLogo': "url('./img/bea-logo.png')",
        })
      },
    },
    variants: {
      extend: {
        padding: ['group-hover'],
        transform: ['hover', 'focus', 'group-hover'],
        scale: ['hover', 'group-hover'],
        textDecoration: ['hover'],
      }
    },
    plugins: [
      require('tailwindcss-filters'),
    ],
  }
  