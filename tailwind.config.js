/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28a745",
        secondary: "#10411b",
        white: "#fff",
        black:"#000",
        gray : "#595959",
        darkGray:"#282828",
        lightGreen:"#009ECA",
      },
      fontFamily: {
        yekan: ['var(--yekan)']
      },
      boxShadow: {
        'cus-1': '0 0 2px #00000040',
      }
    },
  },
  plugins: [],
};
