/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'PlayFair': ['PlayFair-Display'],
        'Roboto': ['Roboto'],
        'Linefont': ['Linefont']
      }
    },
  },
  plugins: [],
}

