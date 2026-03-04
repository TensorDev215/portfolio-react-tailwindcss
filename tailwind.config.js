module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lemon: ['Lemon', 'cursive'],
        inika: ['Inika', 'serif']
      },
      maxWidth: {
        '1440': '1440px'
      },
      screens: {
        'xs': '475px'
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
