const colors = require('tailwindcss/colors')

module.exports = {
    prefix: '',
    purge: {
        enable: process.env.NODE_ENV === 'production',
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            minWidth: {
                'mobile': '280px'
            },
            width: {
                'mobile': '280px'
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            primary: {
                DEFAULT: '#2196F3',
                '50': '#FBFDFF',
                '100': '#E3F2FD',
                '200': '#B2DBFB',
                '300': '#82C4F8',
                '400': '#51ADF6',
                '500': '#2196F3',
                '600': '#0C7CD5',
                '700': '#0960A5',
                '800': '#064475',
                '900': '#042844'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};