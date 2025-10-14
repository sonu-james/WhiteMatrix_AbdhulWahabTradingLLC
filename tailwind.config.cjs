/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
     fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        baloo: ["Baloo 2", "cursive"],
        bungee: ["Bungee", "cursive"],

      },
      
    },
  },
  plugins: [],
}
