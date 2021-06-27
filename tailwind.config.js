module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellowy: "hsl(51, 100%, 49%)",
        softRed: "hsl(7, 99%, 70%)",
        greeny: "hsl(157, 28%, 71%)",
        darkGreeny: "hsl(167, 40%, 24%)",
      },
    },
  },
  variants: {
    extend: { textColor: ["responsive", "hover", "focus", "group-hover"] },
  },
  plugins: [],
};
