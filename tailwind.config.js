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
                    DEFAULT: '#2563EB', // A more vibrant blue
                    hover: '#1D4ED8',
                },
                secondary: '#F3F4F6',
                accent: '#3B82F6',
                text: {
                    main: '#1F2937',
                    muted: '#6B7280',
                    light: '#9CA3AF',
                },
                bg: {
                    white: '#FFFFFF',
                    light: '#F9FAFB',
                    dark: '#111827',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            spacing: {
                xs: '0.5rem',
                sm: '1rem',
                md: '2rem',
                lg: '4rem',
                xl: '8rem',
                '2xl': '12rem',
            },
            borderRadius: {
                sm: '0.375rem',
                md: '0.5rem',
                lg: '1rem',
                xl: '1.5rem',
                full: '9999px',
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
            }
        },
    },
    plugins: [],
}
