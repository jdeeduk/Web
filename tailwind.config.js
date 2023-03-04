/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
      },
    },
  },
  plugins: [],
};
