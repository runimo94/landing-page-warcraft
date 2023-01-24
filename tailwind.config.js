/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        wall1: "url(assets/background/warcraft_wall_1.png)",
        wall1xl: "url(assets/background/warcraft_wall_1_xl.png)",
        wall2: "url(assets/background/warcraft_wall_2.png)",
      },
    },
  },
  plugins: [],
};
