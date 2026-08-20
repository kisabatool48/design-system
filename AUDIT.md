# UI/UX Audit — DevLogix UI Component Library

**Date:** 2026-08-20
**Scope:** All components under `src/components` (atoms: Button, Input, Badge, Typography; molecules: DataTable, Modal; organisms: Navbar, Sidebar), design tokens, Tailwind theme, and Storybook setup.
**Method:** No Figma/wireframes exist, so the audit checks internal consistency instead: dark/light theme coverage, token usage vs hardcoded values, focus/disabled/size/radius conventions, and component reuse.

---

## 1. Fixed in this change

| Fix | Where |
|---|---|
| Button dark theme completed: `link` was invisible in dark mode (`text-black`), `secondary` dark hover was unreadable (black on near-black), `primary` had no dark hover, focus rings produced a white halo in dark mode and defaulted to blue on 3 of 5 variants | `src/components/atoms/Button/Button.tsx` |
| Missing Tailwind tokens `darkBorder`, `darkBadge`, `lightBadge` — components referenced them but they were never defined, so the classes silently emitted nothing (Button outline border, Badge neutral text, Input borders) | `tailwind-preset.cjs` |
| Tailwind theme extracted into a shareable preset (`tailwind-preset.cjs`) — single source of truth, also consumable by Squad A | `tailwind-preset.cjs`, `tailwind.config.js` |
| Dark mode was unreachable: `darkMode: 'class'` but nothing ever added the `dark` class. Storybook now has a Light/Dark toolbar + themed canvas; the demo app has a theme toggle | `.storybook/preview.tsx`, `src/App.tsx` |
| `src/App.tsx` was an empty file while `main.tsx` imported its default export — the Vite demo was broken. Rebuilt as an atoms showcase | `src/App.tsx` |
| `.storybook/main.ts` listed addons that are not installed (`addon-links`, `addon-essentials`, `addon-interactions`); replaced with the installed ones | `.storybook/main.ts` |

## 2. Per-component findings (not fixed — recommendations)

### Button
- `darkBorder` (#171717) is nearly invisible against `darkBg` (#0D0D0D). Kept faithful to the token values (palette-change constraint); recommend a dedicated, lighter dark border token in a follow-up.
- Implementation uses `as any` casts to unwrap the icon-only union type.

### Input
- Error state (`border-red-500`, `text-red-500`) has no dark variant and bypasses tokens (Badge uses `dark:text-red-400` for the same semantic).
- Focus styles are inconsistent within the component: the wrapper uses a nearly invisible `ring-black/5` ring while addon buttons use `ring-brand`; neither matches Button.
- `lg` size input uses `px-6` but its addons use `px-5` — visually mismatched.

### Badge
- Sizes are only `sm`/`md` (no `lg`), breaking the sm/md/lg scale used by Button and Input, and both sizes share the same font size.
- `success`/`warning`/`danger` use raw Tailwind palette colors (green/amber/red) — no semantic tokens exist for status colors anywhere.

### Typography
- Not used by any other component — Navbar, Sidebar, DataTable, and Modal all hand-roll their own text styles, which is the root cause of the typographic inconsistency.
- `subMenuItem: text-[0.969rem]` is a magic number; the `lineHeight` tokens in `src/tokens/typography.ts` are never applied.

### DataTable
- **Light-only**: zero `dark:` classes; hardcoded `bg-white`, `text-[#16151C]`, `text-[#A2A1A8]`, etc. Renders as a white slab on a dark page.
- Uses its **own teal `#41BFAA`** instead of the `brand` token (#66CFC4).
- Pagination bugs: page numbers hardcoded to `[1,2,3,4]` regardless of `totalRecords`/`pageSize`; the "Showing 1 to N" text ignores the active page; the Next button has no `disabled` handling and can page past the end; `onRowClick` is declared in the types but never wired up.
- Three radius systems in one file (`rounded-[10px]`, `rounded-[8px]`, `rounded-lg`); search input removes the focus outline without an adequate replacement; several buttons have no focus styling at all.
- References the font `Lexend`, which is in no config and never loaded.

### Modal
- **Dark-only**: the mirror image of DataTable — hardcoded `#171717`/`#0D0D0D`/`#272731` hexes even though tokens exist for every one of them. Looks foreign in a light context.
- Accessibility: no focus trap, no focus restore on close, no `aria-labelledby`, backdrop close has no keyboard equivalent, close button has no focus ring.
- `size="lg"` maps to `max-w-xl` (a skipped step), and `QRModalData` (demo data shape) leaks into the public types.

### Navbar & Sidebar
- Use a **third theming mechanism**: a `theme?: 'dark' | 'light'` prop with ternaries, incompatible with the atoms' `dark:` class approach — a Button inside a `theme="dark"` Navbar renders in light mode. They also disagree on defaults (Navbar defaults light, Sidebar dark).
- Hardcoded hexes throughout (`#0D0D0D`, `#272731`, `#808990`, `#6B7280`, …) including a **third brand teal `#0D938C`**.
- Sidebar theme leaks: the collapsed expand-bar border, footer role text, and avatar colors are dark-theme values applied in both themes.
- Reimplement atoms instead of using them: Sidebar's nav badge duplicates `Badge`, nav labels bypass `Typography` (whose `menuItem`/`subMenuItem` variants exist precisely for this).
- No focus rings on any interactive element; nav links remove the outline with no replacement.
- Disabled nav items use `opacity-30` vs the atoms' `opacity-50`.

### Tokens
- `src/tokens/spacing.ts` is empty and unexported; `src/styles/token.css` is empty and unused — dead files.
- `tokens/colors.ts` and the Tailwind theme were duplicated (now unified via the preset, but `tokens/colors.ts` still needs to be kept in sync manually).

## 3. Cross-cutting issues

1. **Three brand teals**: `#66CFC4` (token/Button/Modal accent), `#41BFAA` (DataTable), `#0D938C` (Navbar/Sidebar). Pick one — the `brand` token — and sweep the rest.
2. **Two theming mechanisms**: `dark:` classes (atoms) vs `theme` prop (organisms), plus hardcoded single-theme components (Modal, DataTable). Standardize on the `dark` class.
3. **Fonts never loaded**: Archivo, Poppins (and Lexend) are referenced but no `@font-face`/Google Fonts link exists anywhere — everything falls back to system fonts. Consumers must load them (documented in `docs/CONSUMPTION.md`).
4. **Inconsistent conventions**: border radii (`rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-[10px]`, `rounded-[8px]`), disabled opacities (50 / 30), and focus-ring recipes vary component to component.
5. **Storybook vitest suite is broken upstream** (pre-existing): `npx vitest run --project=storybook` fails in `@storybook/addon-vitest`'s setup file with an ESM interop error (`aria-query` does not provide `elementRoles`). Verified to fail identically on the unmodified repo. Likely fixed by a future addon/dependency release; several devDependencies are pinned to `"latest"`, which makes such breakage more likely — consider pinning real versions.

## 4. Recommended follow-up sequencing

1. Unify the teal to the `brand` token (small, high-impact, no layout risk).
2. Convert Modal and DataTable to token-based, dual-theme styling (`dark:` variants).
3. Migrate Navbar/Sidebar off the `theme` prop onto `dark:` classes (keep the prop temporarily as a deprecated alias).
4. Make organisms consume `Button`, `Badge`, `Typography` instead of re-implementing them.
5. Standardize the focus-ring recipe, radius scale, and disabled opacity; add semantic status tokens (success/warning/danger) and a proper dark border token.
6. Fix DataTable pagination logic and Modal accessibility (focus trap, `aria-labelledby`).
