/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-light' : '#75E6E0',
        'pink-light' : '#E6ADDD'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        grotesk: ['Odibee Sans','cursiv'],
        oswald: ['VT323','monospace']
      },
      backgroundImage: {
        'block': "url('./public/me.png')",
        'tree' : "url('./public/tree.png')",
        'background-404' : "url('./public/background-error-404.png')"
      }
    },
  },
  plugins: [],
}
