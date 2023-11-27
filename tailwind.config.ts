/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#fafafa",
        black: "#000",
        whitesmoke: "#f1f1f1",
        white: "#fff",
        amaranth: "#ce4257",
        priceText:"#333",
        prodText:"#505050",
        borderRed:"#ff99ac"
      },
      spacing: {},
      fontFamily: {
        sans: ['var(--font-manrope)'],
      }
    }}
};
