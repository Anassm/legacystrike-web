/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "discord-blue": "#738ADB",
        "ct-blue": "#3b415c",
        "t-orange": "#e48717",
      },
    },
  },
  plugins: [],
};
