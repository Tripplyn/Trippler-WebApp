/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: "#1D4365",
        background: "#1B1F23",
        buttonCities: "#3871C1",
        toolbar_background: "#1A1D20",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
