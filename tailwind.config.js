/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        albert: ['Albert Sans', 'sans-serif'],
        rametto: ['Rammetto One', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundColor: {
        primary: '#121212'
      },
      textColor: {
        background: '#121212'
      }
    },
  },
  plugins: [],
}
