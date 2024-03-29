/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      "dark-blue": "hsl(209, 23%, 22%)",
      "dark-bg": "hsl(207, 26%, 17%)",
      "light-text": "hsl(200, 15%, 8%)",
      "dark-gray": "hsl(0, 0%, 52%)",
      "light-bg": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  darkMode: "selector",
  plugins: [],
};
