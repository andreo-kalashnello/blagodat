/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.js",
        "./*.html",
        "./node_modules/tw-elements/js/**/*.js",
    ],
    theme: {
        screens: {
            xl: { max: "1279.99px" },
            lg: { max: "1023.99px" },
            md: { max: "767.99px" },
            l: { max: "424.99px" },
            m: { max: "359.99px" },
            s: { max: "319.99px" },
        },
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            backgroundImage: {
                heroGradient:
                    "linear-gradient(94.59deg, #4923B4 2.39%, #E878CF 97.66%)",
            },
            colors: {
                brownC900: "#532F23",
                brownC800: "#B3925F",
                brownC800O15: "#B3925F26",
                brownC700: "#D0A58A",
                redC900: "#E20000",
                whiteC800: "#FFFAF6",
                whiteC700: "#EFE8E8",
                greyC900: "#372F2F",
                footerC900: "#F7F7F7",
            },
            backgroundImage: {
                // newsSwiperNext: "url('/img/.svg')",
                // newsSwiperPrev: "url('/img/.png')",
                Jesus: "url('/src/assets/Jesus.png')",
            },
            backgroundPosition: {
                "top-14": "center top 14rem",
                "top-40": "center top 40rem",
                "top-80": "center top 80rem",
            },
        },
    },
    plugins: [
        require("./node_modules/tw-elements/plugin.cjs"),
        "prettier-plugin-tailwindcss",
    ],
};
