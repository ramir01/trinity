/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens:{
      phone:{max:'600px'}
    }
  },
  plugins: [],
}
