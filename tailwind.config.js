/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(37 99 235)',
        'primary-dark': 'rgb(29 78 216)',
        'white-high': 'rgba(255, 255, 255, 0.95)',
        'black-high': 'rgba(0, 0, 0, 0.9)'
      },
      backgroundColor: {
        'white-contrast': 'rgba(255, 255, 255, 0.25)',
        'dark-contrast': 'rgba(0, 0, 0, 0.75)'
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
        'fadeIn': 'fadeIn 0.3s ease-in-out'
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' }
        },
        'shake': {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};