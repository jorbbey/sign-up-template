/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#424242",
        "dark-blue": "#24243E",
      },
    },
  },
  plugins: [],
};
