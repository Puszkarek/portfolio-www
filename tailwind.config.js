/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, scss}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "black",
      white: "white",
      "brown-100": "#faf2ef",
      "purple-100": "#f2eaff",
      "purple-500": "#ae7aff",
      "purple-700": "#8b62cb",
      "purple-300": "#eee3ff",
      "green-300": "#98E9AD",
      "green-700": "#66cb62",
      "red-300": "#E99897",
      "red-700": "#cb6262",
      "yellow-300": "#FBE8A4",
      "blue-300": "#a4dbfb",
      "blue-700": "#62a7cb",
      "grey-500": "#60646D",
      "grey-100": "rgb(243, 244, 246)",
    },
    extend: {
      fontFamily: {},

      boxShadow: {
        "regular-sm": "rgb(0, 0, 0) 3px 3px 0px 0px",
        regular: "rgb(0, 0, 0) 5px 5px 0px 0px",
        "regular-lg": "rgb(0, 0, 0) 10px 10px 0px 0px",
      },
      padding: {
        m: "1rem",
        lg: "2rem",
      },
      gap: {
        m: "1rem",
        lg: "2rem",
      },
      margin: {
        m: "1rem",
        lg: "2rem",
      },
    },
  },
  plugins: [],
};
