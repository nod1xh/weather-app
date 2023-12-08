/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
