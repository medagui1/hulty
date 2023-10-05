/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'satoshi' : ['Satoshi', 'sans-serif']
    },
    extend: {
      colors : {
        'primary' : "#050F27",
      },
      backgroundColor : {
        'secondary' : "#050F27",
        'primary' : "#F7F8F8"
      }
    },
  },
  plugins: [],
}

