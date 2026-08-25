import React from 'react';
import type { Preview, Decorator } from '@storybook/react-vite';
// @ts-expect-error TypeScript CSS import resolution
import '../src/index.css';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? 'light';
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen p-6 bg-white text-lightText dark:bg-darkBg dark:text-darkText">
        <Story />
      </div>
    </div>
  );
};

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Color scheme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
