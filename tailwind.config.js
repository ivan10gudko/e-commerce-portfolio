/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
        fontFamily: {
          urbanist: ['Urbanist', 'Helvetika','sans-serif'],
          surveyor:["Surveyor Text Regular",'Georgia','serif'],
          gelasio:["Gelasio",'Georgia','serif'],
          rasa:["Rasa",'Georgia','serif'],
        },
        backgroundColor:{
          productGray :"#fafafa",
        }
    },
  },
  safelist: [
    'bg-black',
    'bg-white',
    'text-black',
    'text-white',
    

  ],
  plugins: [],
}

