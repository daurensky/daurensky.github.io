/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        comforter: ['Comforter', 'handwriting'],
        diplomata: ['Diplomata', 'display'],
      },
      backgroundColor: {
        primary: '#121212',
      },
      textColor: {
        background: '#121212',
      },
    },
  },
  plugins: [],
}
