module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
