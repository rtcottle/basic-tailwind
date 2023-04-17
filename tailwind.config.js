/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 6s linear infinite',
      },
    },
  },
  plugins: [],
};
