/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scrollSnapType: ["responsive"],
      scrollSnapAlign: ["responsive"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
