const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'sm': '1rem',
      },
      height: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        full: '100%',
        screen: 'calc(var(--vh) * 100)',
      }),
      minHeight: theme => ({
        '0': '0',
        ...theme('spacing'),
        full: '100%',
        screen: 'calc(var(--vh) * 100)',
      }),
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ], 
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}