import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Library build only — the demo SPA and Storybook/vitest keep using vite.config.ts.
export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    dts({
      tsconfigPath: path.join(dirname, 'tsconfig.build.json'),
      rollupTypes: false,
    }),
  ],
  build: {
    lib: {
      entry: path.join(dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    sourcemap: true,
    rollupOptions: {
      external: [/^react($|\/)/, /^react-dom($|\/)/],
      output: { exports: 'named' },
    },
  },
});
