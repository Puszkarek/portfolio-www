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
    },
    boxShadow: {
      external: "inset -2px -2px 0 0 #262626, inset 2px 2px 0 0 #f0f0f0, inset -4px -4px 0 0 #7e7e7e, inset 4px 4px 0 0 #b1b1b1",
      "external-inverted": "inset 2px 2px 0 0 #262626, inset -2px -2px 0 0 #f0f0f0, inset 4px 4px 0 0 #7e7e7e, inset -4px -4px 0 0 #b1b1b1",
      internal: "inset -1px -1px 0 0 #ffffff, inset 1px 1px 0 0 #000000, inset -2px -2px 0 0 #b1b1b1, inset 2px 2px 0 0 #7e7e7e",
    },
  },
  plugins: [],
};
