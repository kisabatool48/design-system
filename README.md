DevLogix UI Component Library

A modular, highly reusable React component system built with TypeScript, Tailwind CSS, and Storybook, designed for enterprise asset and resource management workflows.

---

## Features & Components

* **Data Tables (Asset Listing):**
  * Generic type-safe data grid (`DataTable<T>`)
  * Full top toolbar with global search, add asset triggers, and filter controls
  * Action controls: View QR/Details, Edit, and Delete action handlers
  * Responsive bottom pagination system (page counts, size selectors, navigation)
  * States supported: `AssetListing`, `LoadingState`, `EmptyState`

* **Modals (QR Display & Hardware Tokens):**
  * Accessible dialog box with backdrop blur and escape key handlers
  * Embedded asset QR matrix container and verification badge specifications
  * Action triggers for direct badge download/export

* **Navigation Systems:**
  * **Sidebar:** Expandable/collapsible vertical navigation with active indicator bars, badge counts, and user profile footer (Dark & Light themes supported).
  * **Navbar:** Minimalist top navigation header featuring brand mark, links with smooth hover states, authentication shortcuts, and action CTAs.

---

## Tech Stack

* **Framework:** React + Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Design System / Documentation:** Storybook 8+

---

## Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
2. Run Storybook
Launch the isolated component development workshop:

Bash
npm run storybook
Storybook will run locally at http://localhost:6006.

3. Build Project
Bash
npm run build
📁 Project Structure
Plaintext
src/
├── components/
│   ├── atoms/
│   │   ├── Badge/
│   │   ├── Button/
│   │   └── Input/
│   ├── molecules/
│   │   ├── DataTable/
│   │   └── Modal/
│   └── organisms/
│       ├── Navbar/
│       └── Sidebar/
├── index.css
└── index.ts