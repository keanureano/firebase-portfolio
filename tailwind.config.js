/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        black: {
          default: "#000000",
          50: "#E6E6E6",
          100: "#D9D9D9",
          200: "#BFBFBF",
          300: "#A6A6A6",
          400: "#8C8C8C",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#262626",
          900: "#0D0D0D",
          950: "#000000",
        },
      },
      scale: {
        101: "1.01",
        102: "1.02",
      },
    },
  },
  plugins: [],
};
