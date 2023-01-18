/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyColor: "#030D25",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        todoShodow: "0px 0px 20px 4px rgba(11,4,209,1)",
      },
    },
  },
  plugins: [],
};
