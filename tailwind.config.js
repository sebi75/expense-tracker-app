module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            display: ["Open Sans", "sans-serif"],
            body: ["Open Sans", "sans-serif"],
        },
        extend: {
            screens: {
                mf: "990px",
            },
            keyframes: {
                "slide-in": {
                    "0%": {
                        "-webkit-transform": "translateX(120%)",
                        transform: "translateX(120%)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0%)",
                        transform: "translateX(0%)",
                    },
                },
            },
            animation: {
                "slide-in": "slide-in 0.5s ease-out",
            },
            colors: {
                primary: "rgba(68, 76, 247, 0.8)",
                "primary-hover": "rgba(68, 76, 247, 1)",
                "gray-trans": "rgba(0,0,0,0.3)",
                "gray-trans-hover": "rgba(0,0,0,0.4)",
            },
        },
    },
    plugins: [require("daisyui")],
}
