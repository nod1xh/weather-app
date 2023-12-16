/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
      },
    },
    screens: {
      sms: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "2560px",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        span: {
          fontSize: theme("fontSize.xl"),
          display: theme("display: block"),
        },
      });
    }),
  ],
};
