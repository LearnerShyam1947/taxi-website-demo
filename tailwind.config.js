/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E5',
          100: '#FFF0BF',
          200: '#FFE380',
          300: '#FFD740',
          400: '#FFC400',
          500: '#FFB300', // Primary gold
          600: '#E6A200',
          700: '#CC8F00',
          800: '#B37D00',
          900: '#996A00',
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(255, 179, 0, 0.39)',
      },
    },
  },
  plugins: [],
};