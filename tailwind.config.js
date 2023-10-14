/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
