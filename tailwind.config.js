/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {
            keyframes: {
                flipHorizontal: {
                    "0%": { transform: "rotateY(180deg)" },
                },
                flipVertical: {
                    "0%": { transform: "rotateX(180deg)" },
                },
            },
            animation: {
                hflip: "flipHorizontal 1s",
                vflip: "flipVertical 1s",
            },
        },
    },
    plugins: [],
};
