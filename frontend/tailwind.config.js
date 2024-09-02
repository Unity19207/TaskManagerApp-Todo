/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        screens: {
            sm: { max: "640px" },

            md: { max: "768px" },

            lg: { max: "1024px" },

            xl: { max: "1280px" },
        },
        extend: {
            animation: {
                border: "background ease infinite",
            },
            keyframes: {
                background: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
        },
    },
    plugins: [],
};
