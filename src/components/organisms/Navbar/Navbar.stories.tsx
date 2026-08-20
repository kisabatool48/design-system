import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LightTheme: Story = {
  args: {
    brandName: 'logo',
    theme: 'light',
    ctaText: 'Contact us',
  },
};

export const DarkTheme: Story = {
  args: {
    brandName: 'logo',
    theme: 'dark',
    ctaText: 'Contact us',
  },
};