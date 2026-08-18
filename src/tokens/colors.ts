export const colors = {
  // Brand Accents (Teal / Mint)
  brand: {
    primary: '#66CFC4',
    primaryDark: '#79D5CC',
    hover: '#52B8AD',
  },

  // Dark Mode Theme Tokens
  dark: {
    bg: '#0D0D0D',
    surface: '#272731',
    element: '#171717',
    text: '#D5DBDE',
    textActive: '#000000',
    border: '#171717',
    badge: '#697077',
  },

  // Light Mode Theme Tokens
  light: {
    bg: '#FFFFFF',
    surface: '#F2F4F8',
    text: '#21272A',
    border: '#C1C7CD',
    borderSubtle: '#F2F4F8',
    badge: '#697077',
  },
} as const;

export type ColorTokens = typeof colors;