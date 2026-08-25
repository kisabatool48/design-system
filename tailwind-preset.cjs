/**
 * Tailwind preset for ui-library.
 *
 * Consumers add this to their tailwind.config:
 *   presets: [require('ui-library/tailwind-preset')]
 * and must include the library dist in their content globs:
 *   './node_modules/ui-library/dist/**\/*.{js,cjs}'
 *
 * Color values mirror src/tokens/colors.ts — keep both in sync.
 */
module.exports = {
  darkMode: 'class',
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
        darkBorder: '#171717',
        darkBadge: '#697077',
        lightSurface: '#F2F4F8',
        lightText: '#21272A',
        lightBorder: '#C1C7CD',
        lightBadge: '#697077',
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
};
