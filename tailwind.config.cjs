/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,cjs,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        carbon: "#242424",
        racing: "#e7000b",
        goldenrod: "#d5a021",
        mint: "#e5ece9",
        platinum: "#f4f4f6",

        steel: "#6b7280" // optional UI neutral

      },
    }
  },
  plugins: [],
}

