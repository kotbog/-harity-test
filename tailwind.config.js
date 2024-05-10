/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#363B5C',
        'light-gray': '#F0F5F9',
        'primary-purple': '#894688',
        'semi-gray': '#B9CADF',
        'gray': '#838A94'
      }
    },
  },
  plugins: [],
}

