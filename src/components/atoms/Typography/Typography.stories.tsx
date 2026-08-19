import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'body', 'menuItem', 'subMenuItem', 'badge'],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'semibold', 'bold'],
    },
    muted: { control: 'boolean' },
    truncate: { control: 'boolean' },
  },
  args: {
    children: 'The word is typography and it is important.',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Body: Story = {};

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body">Body text</Typography>
      <Typography variant="menuItem">Menu item</Typography>
      <Typography variant="subMenuItem">Sub menu item</Typography>
      <Typography variant="badge">Badge text</Typography>
    </div>
  ),
};

export const Muted: Story = { args: { muted: true } };

export const Truncated: Story = {
  args: {
    truncate: true,
    children:
      'This is a very long text that should be truncated when it exceeds the width of its container. It will demonstrate how the truncate prop works in the Typography component.',
  },
  render: (args) => (
    <div style={{ maxWidth: 220 }}>
      <Typography {...args} />
    </div>
  ),
};
