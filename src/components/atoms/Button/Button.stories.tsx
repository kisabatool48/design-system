import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type { ButtonProps } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Pill: Story = {
  args: { shape: 'pill', children: 'Pill Button' },
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'Full Width Button' },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    icon: <span aria-hidden>🗑️</span>,
    'aria-label': 'Delete item',
  },
};
export const WithIcons: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => {
    const baseProps = args as Omit<ButtonProps, 'children' | 'iconOnly'>;
    return (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button {...baseProps} leftIcon={<span aria-hidden>＋</span>}>
          Add Item
        </Button>
        <Button {...baseProps} rightIcon={<span aria-hidden>→</span>}>
          Continue
        </Button>
      </div>
    );
  },
};