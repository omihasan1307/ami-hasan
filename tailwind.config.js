/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF6B00",
        orangeBlur: "#FFF5EB",
        grayBlur: "#F0EFF5",
        chiniseBlack: "#202020",
      },
      backgroundColor: {
        orange: "#FF6B00",
        orangeBlur: "#FFF5EB",
        grayBlur: "#F0EFF5",
        chiniseBlack: "#202020",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
