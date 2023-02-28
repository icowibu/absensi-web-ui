/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "headline-1": ["Poppins", "sans-serif"],
      "navbar-side": ["Roboto", "sans-serif"],
      "headline-sub": ["Golos Text", "sans-serif"],
    },
  },
  plugins: [],
};
