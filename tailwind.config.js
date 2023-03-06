/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#424874",
        secondary: "#dcd6f7",
        tertiary: "#a6b1e1",
        quaternary: "#cacfd6",
        quinary: "#d6e5e3",
      },
      height: {
        screen80: "80vh",
      },
    },
  },
  plugins: [],
};
