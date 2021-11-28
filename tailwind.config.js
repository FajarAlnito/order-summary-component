module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Red\\ Hat\\ Display", "sans-serif"],
    },
    extend: {
      colors: {
        vPaleBlue: "hsl(225, 100%, 98%)",
        dsBlue: "hsl(224, 23%, 55%)",
        drkBlue: "hsl(223, 47%, 23%)",
        pBlue: "hsl(225, 100%, 94%)",
        brBlue: "hsl(245, 75%, 52%)",
      },
      backgroundImage: {
        bgPatternDesk: "url('/src/assets/pattern-background-desktop.svg')",
        bgPatternMobi: "url('/src/assets/pattern-background-mobile.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
