/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0C1B33',
          50: '#E8EDF7',
          100: '#D1DBEF',
          200: '#A3B7DF',
          300: '#7593CF',
          400: '#476FBF',
          500: '#1A4BAF',
          600: '#153B8C',
          700: '#102D69',
          800: '#0C1B33',
          900: '#081220',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FDFBF3',
          100: '#FBF7E7',
          200: '#F7EFCF',
          300: '#F3E7B7',
          400: '#EFDF9F',
          500: '#D4AF37',
          600: '#C69C1F',
          700: '#A0821A',
          800: '#7A6815',
          900: '#544E10',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};