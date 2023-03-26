/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      display: ["Integral CF", "Comic Sans MS", "sans-serif"],
      body: ["Integral CF", "Comic Sans MS", "sans-serif"],
    },
    extend: {},
    colors: {
      primary: "#502274",
      secondary: "#FFFCFF",
      progress: "#E9D229",
      ...require("tailwindcss/colors"),
    },
  },
  plugins: [],
};
