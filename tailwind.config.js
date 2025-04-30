const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-600': 'hsl(246, 80%, 60%)',
        'orange-300': 'hsl(15, 100%, 70%)',
        'blue-300': 'hsl(195, 74%, 62%)',
        'pink-400': 'hsl(348, 100%, 68%)',
        'green-400': 'hsl(145, 58%, 55%)',
        'purple-700': 'hsl(264, 64%, 52%)',
        'yellow-300': 'hsl(43, 84%, 65%)',
        'navy-950': 'hsl(226, 43%, 10%)',
        'navy-800': 'hsl(235, 41%, 34%)',
        'navy-900': 'hsl(235, 46%, 20%)',
        'purple-500': 'hsl(235, 45%, 61%)',
        'navy-200': 'hsl(236, 100%, 87%)',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        '56': '3.5rem',   // 56px / 16px = 3.5rem
        '40': '2.5rem',   // 40px / 16px = 2.5rem
        '32': '2rem',     // 32px / 16px = 2rem
        '24': '1.5rem',   // 24px / 16px = 1.5rem
        '18': '1.125rem', // 18px / 16px = 1.125rem
        '15': '0.9375rem',// 15px / 16px = 0.9375rem
      },
      lineHeight: {
        '66': '4.125rem', // 66px / 16px = 4.125rem
        '47': '2.9375rem',// 47px / 16px = 2.9375rem
        '38': '2.375rem', // 38px / 16px = 2.375rem
        '28': '1.75rem',  // 28px / 16px = 1.75rem
        '21': '1.3125rem',// 21px / 16px = 1.3125rem
        '18': '1.125rem', // 18px / 16px = 1.125rem
      },
      letterSpacing: {
        '0': '0px',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.text-preset-1': {
          fontFamily: 'rubik',
          fontWeight: '300',
          fontSize: '3.5rem',
          lineHeight: '4.125rem',
          letterSpacing: '0px',
        },
        '.text-preset-2': {
          fontFamily: 'rubik',
          fontWeight: '300',
          fontSize: '2.5rem',
          lineHeight: '2.9375rem',
          letterSpacing: '0px',
        },
        '.text-preset-3': {
          fontFamily: 'rubik',
          fontWeight: '300',
          fontSize: '2rem',
          lineHeight: '2.375rem',
          letterSpacing: '0px',
        },
        '.text-preset-4': {
          fontFamily: 'rubik',
          fontWeight: '300',
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
          letterSpacing: '0px',
        },
        '.text-preset-5-medium': {
          fontFamily: 'rubik',
          fontWeight: '500',
          fontSize: '1.125rem',
          lineHeight: '1.3125rem',
          letterSpacing: '0px',
        },
        '.text-preset-5-regular': {
          fontFamily: 'rubik',
          fontWeight: '400',
          fontSize: '1.125rem',
          lineHeight: '1.3125rem',
          letterSpacing: '0px',
        },
        '.text-preset-6': {
          fontFamily: 'rubik',
          fontWeight: '400',
          fontSize: '0.9375rem',
          lineHeight: '1.125rem',
          letterSpacing: '0px',
        },
      })
    })
  ],
}