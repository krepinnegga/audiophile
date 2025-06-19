/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D87D4A',
          light: '#FBAF85'
        },
        black: {
          DEFAULT: '#101010',
          pure: '#000000'
        },
        white: {
          DEFAULT: '#FFFFFF',
          off: '#FAFAFA',
          light: '#FFFFF1'
        },
        gray: {
          light: '#F1F1F1'
        },
        background: '#FAFAFA',
        foreground: '#101010',
        border: '#F1F1F1'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      },
      fontSize: {
        'h1': ['3.5rem', { // 56px
          lineHeight: '3.625rem', // 58px
          letterSpacing: '0.125rem', // 2px
          fontWeight: '700'
        }],
        'h2': ['2.5rem', { // 40px
          lineHeight: '2.75rem', // 44px
          letterSpacing: '0.09375rem', // 1.5px
          fontWeight: '700'
        }],
        'h3': ['2rem', { // 32px
          lineHeight: '2.25rem', // 36px
          letterSpacing: '0.071875rem', // 1.15px
          fontWeight: '700'
        }],
        'h4': ['1.75rem', { // 28px
          lineHeight: '2.375rem', // 38px
          letterSpacing: '0.125rem', // 2px
          fontWeight: '700'
        }],
        'h5': ['1.5rem', { // 24px
          lineHeight: '2.0625rem', // 33px
          letterSpacing: '0.10625rem', // 1.7px
          fontWeight: '700'
        }],
        'h6': ['1.125rem', { // 18px
          lineHeight: '1.5rem', // 24px
          letterSpacing: '0.08125rem', // 1.3px
          fontWeight: '700'
        }],
        'overline': ['0.875rem', { // 14px
          lineHeight: '1.1875rem', // 19px
          letterSpacing: '0.625rem', // 10px
          fontWeight: '400'
        }],
        'subtitle': ['0.8125rem', { // 13px
          lineHeight: '1.5625rem', // 25px
          letterSpacing: '0.0625rem', // 1px
          fontWeight: '700'
        }],
        'body': ['0.9375rem', { // 15px
          lineHeight: '1.5625rem', // 25px
          fontWeight: '500'
        }]
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '18': '4.5rem' // 72px
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}