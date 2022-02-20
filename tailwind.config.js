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
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
