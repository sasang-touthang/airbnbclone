/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'md': '0 3px 10px rgba(0,0,0,0.1)'
      },
      animation: {
        'page_transition': 'page_transition 0.2s linear forwards'
      },
      keyframes: {
        page_transition: {
          '0%': {top: '20'},
          '100%': {top: '0'}
        }
      }
    },
  },
  plugins: [],
}

