/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.5rem",
        sm: "0.5rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "rgb(173, 58, 49)",
        },
        gray: "#EEEDED",
        dark: "#353546",
        secondary: "#F00C18",
        light: {
          100: "#fff",
        },
      },
    },
  },
  plugins: [],
};
