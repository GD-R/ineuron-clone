/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        'oxanium': ['Oxanium', 'cursive'],
      },
      colors: {
        "backgroundColor": "#2A1A5E",
        "primary": "#F45905",
        "secondary": "#FBE555",
        "third": "#FB9224",
        "yellow": "#fcde67",
        "black": "#030e12",
        "blue": "#5bccf6",
      }
    },
  },
  plugins: [],
}
