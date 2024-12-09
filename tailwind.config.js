/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      'xl' : '1280px',
    },
  },
  plugins: [],
}