/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#ffe5ec",
        black: "#000",
        whitesmoke: "#ffe5ec",
        white: "#fff",
        amaranth: "#ce4257",
        priceText:"#333",
        prodText:"#505050",
        borderRed:"#f7cad0",
        pastelgreen:"#60d394",
        pastelorange:"#D87D4A",
        lightgray:"#6c757d"
      },
      spacing: {},
      fontFamily: {
        sans: ['var(--font-manrope)'],
      }
    }}
};
