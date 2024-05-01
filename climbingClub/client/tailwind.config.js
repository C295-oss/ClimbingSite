/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font-Arial": ["Arial"],
      },
      fontWeight: {
        'extra-bold': '800',
      },
      colors: {
        'CreamWhite': '#F7F9F9',
        'CreamWhiteDimmed': '#D0D3D4',
        'lightBlack': '#263238',
      },
    },
  },
  plugins: [],
}

