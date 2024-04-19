/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NewBlue: 'rgba(6, 11, 115, 0.90)',
        primary: '#128393',
        secondary: '#1877f2',
      }
    },
  },
  plugins: [],
}