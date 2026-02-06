/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#EDE9FE",   // lavender
          DEFAULT: "#6D28D9", // purple
          dark: "#4C1D95",
        },
      },
    },
  },
  plugins: [],
};
