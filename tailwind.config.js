module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "uniswap-gray": "#737781",
      },
      backgroundColor: {
        "uniswap-bg": "#191B1F",
        "uniswap-dark-gray-box": "#2F2F32",
        "uniswap-light-gray-box": "#B5B5B5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
