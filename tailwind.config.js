/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#66CFC4',
          dark: '#79D5CC',
          hover: '#52B8AD',
        },
        darkBg: '#0D0D0D',
        darkSurface: '#272731',
        darkElement: '#171717',
        darkText: '#D5DBDE',
        lightSurface: '#F2F4F8',
        lightText: '#21272A',
        lightBorder: '#C1C7CD',
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}