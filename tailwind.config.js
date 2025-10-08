/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reincarnated-orange': '#ff6b35',
        'reincarnated-dark': '#1a1a1a',
      },
      fontFamily: {
        'brand': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}