# Consuming ui-library (Frontend Squad A guide)

The library is delivered as an npm tarball: `ui-library-0.1.0.tgz` (produced with `npm pack`).

## 1. Install

```bash
npm install ./path/to/ui-library-0.1.0.tgz
```

React and ReactDOM (>=18) are peer dependencies — your app provides them.

## 2. Import components

```tsx
import { Button, Badge, Input, Typography, Modal, DataTable, Navbar, Sidebar, colors } from 'ui-library';

<Button variant="primary" size="md">Save</Button>
```

Prop types are exported too: `import type { ButtonProps } from 'ui-library';`

## 3. Styling — pick ONE of the two paths

### Path A — your app uses Tailwind (recommended)

Add the library's preset and content glob to your `tailwind.config.js`:

```js
module.exports = {
  presets: [require('ui-library/tailwind-preset')],
  darkMode: 'class', // must stay 'class' to match the library
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/ui-library/dist/**/*.{js,cjs}', // ⚠️ REQUIRED
  ],
};
```

> **#1 gotcha:** if you forget the `node_modules/ui-library/dist/**` content glob, the
> components render completely unstyled with no error — Tailwind never generates the
> classes the library uses.

### Path B — your app does NOT use Tailwind

Import the prebuilt stylesheet once at your app root:

```tsx
import 'ui-library/styles.css';
```

Notes:
- `styles.css` includes Tailwind's preflight (base reset), which may interact with your existing global CSS reset.
- **Never combine Path A and Path B** — you'd get duplicate/conflicting utilities.

## 4. Dark mode

Components theme off a `dark` class on any ancestor (typically `<html>`):

```ts
// toggle
document.documentElement.classList.toggle('dark');
```

Everything with `dark:` styling (Button, Input, Badge, Typography) switches automatically.
Note: Navbar and Sidebar currently use their own `theme="dark" | "light"` prop instead
(see AUDIT.md); Modal is dark-styled and DataTable light-styled regardless of theme.

## 5. Fonts

The library references **Archivo** (default sans) and **Poppins** but does not bundle or
load them. Add them in your app, e.g.:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
```

Without this, text falls back to the system sans-serif.

## 6. Design tokens

Raw token values are exported for non-Tailwind usage:

```ts
import { colors, typography } from 'ui-library';
colors.brand.primary; // '#66CFC4'
```

## Rebuilding the tarball (library maintainers)

```bash
npm run build:lib   # dist/index.js + index.cjs + .d.ts tree + styles.css
npm pack            # → ui-library-0.1.0.tgz (prepack runs build:lib automatically)
```
