/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      zen: "Zen Kaku Gothic Antique",
      works: "Work Sans",
    },
    extend: {
      colors: {
        primary: "#0077FF",
        secondary: "#FF6B6B",
        textBlack: "#333333",
        textsecondary: "#222222",
        grayText: "#666666"
      },
    },
  },
  plugins: [],
};
