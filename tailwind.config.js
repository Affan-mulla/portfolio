/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideIn2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideIn3: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        grow: {
          '0%': { transform: 'scaleY(0)', 'transform-origin': 'bottom' },
          '100%': { transform: 'scaleY(1)', 'transform-origin': 'bottom' },
        },
        
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        slideIn2: 'slideIn2 01s ease-out forwards',
        slideIn3: 'slideIn3 01s ease-out forwards',
        grow: 'grow 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}


