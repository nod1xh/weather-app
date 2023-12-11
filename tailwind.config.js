/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/images/newestbg.jpg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        span: {
          fontSize: theme("fontSize.xl"),
          display: theme("display: block"),
        },
        p: { margin: theme("margin.2") },
      });
    }),
  ],
};
