module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      helvetica: ['HelveticaNeue'],
      bebas: ['BebasBold'],
    },

    extend: {
      fontFamily: ['hover', 'focus'],
      keyframes: {
        selectUp: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-3px)',
          },
        },
      },
      animation: {
        selectUp: 'selectUp 0.5s forwards',
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
