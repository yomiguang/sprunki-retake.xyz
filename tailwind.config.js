/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sprunki': {
          dark: '#0A0A0F',
          light: '#E2E2E7',
          accent: '#6D28D9',
          secondary: '#4C1D95',
          surface: '#1E1B4B',
          hover: '#7C3AED'
        }
      }
    },
  },
  plugins: [],
}