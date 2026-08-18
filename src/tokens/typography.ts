export const typography = {
  fontFamily: {
    sans: ['Archivo', 'sans-serif'],
    secondary: ['Poppins', 'sans-serif'],
  },
  fontSize: {
    badge: '0.75rem',      // 12px
    subMenuItem: '0.969rem', // 15.5px
    menuItem: '1rem',      // 16px
    base: '1rem',
    lg: '1.125rem',
  },
  fontWeight: {
    regular: '400',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '100%',
    relaxed: '24px',
  },
} as const;

export type TypographyTokens = typeof typography;