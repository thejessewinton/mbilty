/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      margin: '1.25rem',
    },
    extend: {
      boxShadow: ({ theme }) => ({
        input: `0px 0px 4px ${theme('colors.blue.100')}`,
      }),
      colors: {
        gray: {
          100: '#111111',
          200: '#222222',
          300: '#333333',
        },
        light: {
          100: '#f6f4ee',
        },
        accent: {
          orange: '#904D27',
          green: '#415737',
          beige: '#F6F4EE',
        },
        spotify: '#1db954',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        h1: '3.25rem',
        h2: '2.75rem',
        h3: '2.5rem',
        h4: '2.125rem',
        h5: '1.75rem',
        h6: '1.25rem',
        base: ['14px', '1.5'],
      },
      minWidth: {
        '2/3': '66.66667%',
        '1/2': '50%',
        '1/3': '33.33333%',
        '1/4': '25%',
        '2/5': '20%',
      },
      maxWidth: {
        '2/3': '66.66667%',
        '1/2': '50%',
        '1/3': '33.33333%',
        '1/4': '25%',
        '2/5': '20%',
      },
      animation: {
        fadeIn: 'fadeIn 200ms ease-in-out forwards',
        fadeOut: 'fadeOut 200ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
