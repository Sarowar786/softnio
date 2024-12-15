/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        myFont:['Roboto', 'sans-sarif']
      },
      colors: {
        lightBlack: "#364A63",
        textColor: "#8091A7",
        btnColor: "#6576FF",
      },
    },
  },
  plugins: [],
}