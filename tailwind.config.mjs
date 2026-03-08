/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#050505",
                "dark-accent": "#0a0a0f",
                neon: {
                    purple: "#9b59b6",
                    blue: "#3498db",
                    cyan: "#00d2ff",
                },
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                space: ["'Space Grotesk'", "sans-serif"],
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    'from': { 'box-shadow': '0 0 5px #00d2ff, 0 0 10px #00d2ff' },
                    'to': { 'box-shadow': '0 0 15px #00d2ff, 0 0 25px #9b59b6' },
                }
            },
        },
    },
    plugins: [],
}
