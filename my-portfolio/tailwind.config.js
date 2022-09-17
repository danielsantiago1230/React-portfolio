/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark' : '#2FE0D6',
        'green-semi-dark' : '#75E6E0',
        'green-soft' : '#2FE0D8',
        'green-light' : '#E6ADDD',
        'gray-semi-dark' : '#A4A69C',
        'gray-soft' : '#F5F5F5'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        grotesk: ['Odibee Sans','cursiv'],
        oswald: ['VT323','monospace']
      },
      backgroundImage: {
        'block': "url('./public/me.png')",
        'tree' : "url('./public/tree.png')"
      }
    },
  },
  plugins: [],
}
