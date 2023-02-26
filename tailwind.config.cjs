/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "headline-1": ['Tilt Warp', 'cursive'],
      "navbar-side": ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
