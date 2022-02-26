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
        fadeOut: {
          '80%': {
            opacity: '1',
          },

          '100%': {
            opacity: '0',
          },
          // '100%': {
          //   display: 'none',
          // },
        },
        selectUp: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-3px)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
          },
          '69%': {
            opacity: '0',
          },
          '70%': {
            transform: 'translateY(400px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        appearAndScale: {
          '0%': {
            transform: 'scale(0.94)',
            opacity: '0',
          },

          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        selectUp: 'selectUp 0.5s forwards',
        slideUpSlow: 'slideUp 4s',
        slideUpMed: 'slideUp 3.5s',
        slideUpFast: 'slideUp 3s',
        videoFade: 'fadeOut 3s forwards 1 ',
        carouselTrans: 'appearAndScale 1.6s ease forwards 1',
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
