/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/views/**/*.vue",
    "./src/views/*.vue",
    "./src/components/*.vue",
    "./src/components/**/*.vue",
    "./src/views/*.vue",
    "./src/views/**/*.vue",
    "./src/layouts/*.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#1963D2",
      },
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
