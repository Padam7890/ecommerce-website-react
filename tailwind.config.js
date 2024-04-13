/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: "Poppins",
    },
    colors: {
      ...colors,
      softPrimary: "#84D187",
      primary: "#00B207",
      hardPrimary: "#2C742F",
      warning: "#FF8A00",
      danger: "#EA4B48",
      white:"#FFFFFF",


    }

  },
  plugins: [],
}