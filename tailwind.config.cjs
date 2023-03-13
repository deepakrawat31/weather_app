/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            archivo: ["Archivo", "sans-serif"],
            clash: ["Clash Display", "sans-serif"],
         },
      },
   },
   plugins: [],
};
