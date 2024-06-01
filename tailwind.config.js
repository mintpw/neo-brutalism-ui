/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tickle-me-pink': {
          50: '#fff1f3',
          100: '#ffe3e8',
          200: '#ffccd7',
          300: '#ffa1b7',
          400: '#ff7396',
          500: '#f93a6f',
          600: '#e7175b',
          700: '#c30d4c',
          800: '#a30e47',
          900: '#8b1043',
          950: '#4e0320',
        },
        sunglow: {
          50: '#fefae8',
          100: '#fef4c3',
          200: '#fee78a',
          300: '#fccb30',
          400: '#f9ba16',
          500: '#e9a109',
          600: '#c97a05',
          700: '#a05608',
          800: '#85430e',
          900: '#713712',
          950: '#421b06',
        },
        coral: {
          50: '#fff4ed',
          100: '#ffe7d4',
          200: '#ffcaa8',
          300: '#ffa671',
          400: '#ff8048',
          500: '#fe5011',
          600: '#ef3607',
          700: '#c62408',
          800: '#9d1f0f',
          900: '#7e1c10',
          950: '#440a06',
        },
        lavender: {
          50: '#fcf6fd',
          100: '#f6ecfb',
          200: '#eed9f5',
          300: '#e2bbec',
          400: '#c980db',
          500: '#ba67ce',
          600: '#9f48b1',
          700: '#843992',
          800: '#6e3078',
          900: '#5c2c63',
          950: '#3a1240',
        },
        turquoise: {
          50: '#eefffb',
          100: '#c6fff5',
          200: '#8effee',
          300: '#4dfbe3',
          400: '#19e8d3',
          500: '#00ccba',
          600: '#00a499',
          700: '#03827b',
          800: '#086763',
          900: '#0c5552',
          950: '#003434',
        },
        'blue-lagoon': {
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
  plugins: [require('daisyui')],
}
