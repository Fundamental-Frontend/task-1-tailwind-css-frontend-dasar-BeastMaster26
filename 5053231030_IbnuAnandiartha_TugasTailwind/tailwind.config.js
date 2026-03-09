/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
       colors: {
        primary: '#2563EB',
        secondary: '#16A34A',
        background: '#F8FAFC',
      },
    },
  },
  plugins: [],
}

