/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideOut: {
          '100%': { transform: 'translateX(0)' },
          '0%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in forwards'
      },
      animationSlide: {
        slideIn: 'slideOut 0.5s ease-in forwards'
      }
    }
  },
  plugins: []
}
