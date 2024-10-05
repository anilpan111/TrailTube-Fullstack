/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorLevel1: '#0D1321', // Replace with your desired color   #00df9a  #302E3B
        colorLevel2: '#213145',
        colorLevel3: '#28B67E',
        colorLevel4: '#D3DCDE',
        colorLevel5: '#1D4C4F',
      }
    },
    fontFamily:{
      myFont: ["Vollkorn"]
    }
  },
  plugins: [],
}

