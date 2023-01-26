/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        wall2md: "url(assets/background/warcraft_wall_2_md.png)",
        wall2xl: "url(assets/background/warcraft_wall_2_xl.png)",
        divider: "url(assets/divider.webp)",
        backstone: "url(assets/background/bg_stone_desktop.webp)",
        backstone_xs: "url(assets/background/bg_stone_mobile.webp)",
        map_northrend: "url(assets/background/map_northrend_gray.webp)",
        forest: "url(assets/background/bg_forest.webp)",
      },
      colors: {
        "blizz-color": "#00d1ff",
        "brown-1": "#6a4c36",
      },
      fontFamily: {
        metamorph: ["Metamorphous", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
