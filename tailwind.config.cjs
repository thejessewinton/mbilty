/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            margin: '1.25rem',
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
        extend: {
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
            backgroundPosition: {
                'right-1': 'right 0.5rem center',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'fade-out': {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
                'fade-up': {
                    '0%': { opacity: 0, transform: 'translateY(5px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                'fade-down': {
                    '0%': { opacity: 0, transform: 'translateY(0px)' },
                    '100%': { opacity: 1, transform: 'translateY(5px)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 200ms ease-in-out forwards',
                'fade-out': 'fade-out 200ms ease-in-out forwards',
                'fade-up': 'fade-up 200ms ease-in-out forwards',
                'fade-down': 'fade-down 200ms ease-in-out forwards',
            },
        },
    },
    plugins: [],
};
