/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-color': '#f0faff',
        'primary-color': '#6bC6ff',
        'secondary-color': '#d66464',
        'accent-color': '#fc94af'
      },
      
    },
  },
  darkMode: 'class',
  plugins: [],
}

