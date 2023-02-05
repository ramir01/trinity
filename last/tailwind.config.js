/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
    phone:{max:'700px'}
  }
  },
  plugins: [],
}
