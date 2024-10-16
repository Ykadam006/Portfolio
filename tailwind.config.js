/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#7CA982',
        secondary: '#243E36',
        background: '#F1F7ED',
      },
    },
  },
  plugins: [],
};


