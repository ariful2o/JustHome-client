/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  
  theme: {
    extend: {
      fontFamily:{
        vibes:'"Great Vibes", cursive', 
        sotify:'"Satisfy", "cursive"'
      }
    },
    themes: ["light", "synthwave"]
  },

  plugins: [require("daisyui")],
}

