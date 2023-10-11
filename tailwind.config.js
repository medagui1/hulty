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
        'secondary' : '#1D263C'
      },
      backgroundColor : {
        'secondary' : "#1D263C",
        'primary' : "#F7F8F8",
        'tertiary' : '#ffffff10',
        'dark_bg' : '#050F27'
      }
    },
  },
  plugins: [],
}

