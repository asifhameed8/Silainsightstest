const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    future: {
        hoverOnlyWhenSupported: true
    },
    theme: {
        extend: {
            fontFamily: {
                display: ['var(--font-proxima)', 'var(--font-inter)', ...fontFamily.sans]
            },
            colors: {
                primary: '#32A7F4',
                secondary1: '#bfbfbf',
                secondary: '#6B7280',
                success: '#00BE24',
                danger: '#F14A4A',
                light: '#D1D5DB',
                info: '#8DC63F',
                dark: '#232C36',
                bgcolor: '#17212B',
                bgDark: '#0E1621',
                gray17: '#242F3D',
                chinesesilver: '#CCCCCC',
                davygrey: '#555555 ',
                borderColor: '#33424D',
                gray01: '#737373',
                garylight: '#17212B',
                purpals: '#BF44A4',
                blue1: '#1DA1F2',
                inputBg: '#1c1D21',
                offwhite: '#D5D5D5',
                red1: '#F14A4A',
                green1: '#4AF16F',
                lightGreen: '#34D399',
                comments: '#F1A44A',
                repost: '#89F14A',
                like: '#F14A4A',
                view: '#4AE7F1',
                //dark mode
                lightText: '#363840',
                lightBorder: '#E3E3E4',
                lightPlaceholder: '#8B939B',
                lightBg: '#D7DBE1',
                lightHover: '#F0F2F5',
                lightCardBg: '#dee1e4',
                lightSuccess: '#1CBB2C',
                lightDanger: '#D22222'
            },
            screens: {
                sm: '1024px',
                md: '1024px',
                Exl: { min: '1440px' },
                xs: { min: '300px', max: '540px' },
                xs1: { min: '300px', max: '426px' },
                xs2: { min: '300px', max: '380px' }
            },
            lineHeight: {
                0: 0
            }
        }
    },
    corePlugins: {
        aspectRatio: false
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')]
};
