/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                flicker: "flicker 1.5s infinite",
            },
            keyframes: {
                flicker: {
                    "0%, 100%": { opacity: "1" },
                    "25%": { opacity: "0.6" },
                    "50%": { opacity: "0.8" },
                    "75%": { opacity: "0.4" },
                },
            },
        },
    },
    plugins: [],
};
