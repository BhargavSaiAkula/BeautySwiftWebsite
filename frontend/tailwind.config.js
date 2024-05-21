/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#fc7065',
        customBackground: '#0D0C12',
        customBorder: '#CCA876',
      },
    },
  },
  plugins: [],
}