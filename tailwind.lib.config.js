import preset from './tailwind-preset.cjs';

/**
 * Build-only config for dist/styles.css: compiles every utility used by the
 * library components (stories and demo app excluded). Consumed by build:css.
 * @type {import('tailwindcss').Config}
 */
export default {
  presets: [preset],
  darkMode: 'class',
  content: ['./src/components/**/*.{ts,tsx}', '!./src/**/*.stories.tsx'],
};
