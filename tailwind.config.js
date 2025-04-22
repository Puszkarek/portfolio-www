/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, scss}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      "blue-200": "#02007F",
      "grey-100": "#C3C3C3",
      "green-200": "#008282",
    },
    extend: {
      fontFamily: {
        vt323: ["VT323", "monospace"],
      },

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
