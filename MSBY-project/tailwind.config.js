/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"','sans-serif']
      },
      colors : {
        primary: '#16405B'
      }


    },
  },
  plugins: [],
}