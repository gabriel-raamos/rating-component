/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        lightGray: "hsl(217, 12%, 63%)",
        mediumGray: "hsl(216, 12%, 54%)",
        darkGray: "hsl(210,19%,23%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)"
      }
    },
  },
  plugins: [],
}

