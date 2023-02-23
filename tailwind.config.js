/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,js,jsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 28s linear infinite',
      },
    },
  },
  plugins: [],
}
