/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./logicController/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      screens:{
        'mobile':'520px'
      }
    },
  },
  plugins: [require("daisyui")],
}
