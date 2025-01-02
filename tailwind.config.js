/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ebfffe',
          100: '#cdfffe',
          200: '#a1fdff',
          300: '#60f9ff',
          400: '#18eaf8',
          500: '#00cdde',
          600: '#00afc7',
          700: '#088196',
          800: '#10687a',
          900: '#125667',
          950: '#053947',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          'base-100': '#ffffff',
          '--rounded-box': '1rem',
          '--rounded-btn': '0',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
