/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
  darkMode: "class",
  plugins: [nextui()],
}

