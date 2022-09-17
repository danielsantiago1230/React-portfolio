/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-dark' : '#232625',
        'green-semi-dark' : '#35403A',
        'green-soft' : '#4C594F',
        'green-light' : '#36704F',
        'gray-semi-dark' : '#A4A69C',
        'gray-soft' : '#F5F5F5'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        grotesk: ['Space Grotesk','sans-serif'],
        oswald: ['Oswald','sans-serif']
      }
    },
  },
  plugins: [],
}
