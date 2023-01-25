/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./*.{html,js}"],
    content: ["./*.{html,js}"],
    theme: {
      fontFamily: {
        custom1: ["Custom-1", "sans-serif"],
      },
    extend: {
      colors: {
        'cus-blue': '#1B244A'
      },
      width: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
