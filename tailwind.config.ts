/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#fafafa",
        black: "#000",
        whitesmoke: "#f1f1f1",
        white: "#fff",
        peru: "#d87d4a",
      },
      spacing: {},
      fontFamily: {
        sans: ['var(--font-manrope)'],
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "1rem",
      "9xl": "1.75rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("daisyui")]
};
