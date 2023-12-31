/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        fill: "fill",
      },
      backgroundPosition: {
        center: "center center",
      },
      colors: {
        "discord-blue": "#738ADB",
        "ct-blue": "#3b415c",
        "t-orange": "#e48717",
      },
      width: {
        stats: "35%",
      },
    },
    letterSpacing: {
      score: "-1.05em",
    },
  },
  plugins: [require("daisyui")],
};
