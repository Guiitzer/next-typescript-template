const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // colors: {
        //     transparent: "transparent",
        //     current: "currentColor",
        //     white: colors.white,
        //     green: colors.teal,
        //     black: colors.black,
        //     yellow: colors.amber,
        // },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
