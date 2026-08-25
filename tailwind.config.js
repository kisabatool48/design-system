import preset from './tailwind-preset.cjs';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}
