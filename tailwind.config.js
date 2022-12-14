/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Epilogue", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#effefc",
          100: "#c7fff9",
          200: "#90fff3",
          300: "#51f7ec",
          400: "#1de4dd",
          500: "#04c8c3",
          600: "#00aaaa",
          700: "#057f80",
          800: "#0a6365",
          900: "#0d5354",
        },
      },
    },
  },
  plugins: [],
};
