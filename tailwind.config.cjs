/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#293462",
      secondary: "#FEDB39",
      accent: "#1CD6CE",
    },

    extend: {
      fontFamily: "'Poppins', system-ui, sans-serif",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
