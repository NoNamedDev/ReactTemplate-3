/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      bc_font : ['Fredoka One', "cursive"],
      bc_font_1 : ['Archivo Black', "sans-serif"],
      bc_font_2 : ['PT Sans Narrow', "sans-serif"]
    }
  },
  plugins: [],
}
