import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    showDot: { control: 'boolean' },
  },
  args: {
    children: 'In stock',
    variant: 'success',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="neutral">Draft</Badge>
      <Badge variant="success" showDot>In stock</Badge>
      <Badge variant="warning" showDot>Low stock</Badge>
      <Badge variant="danger" showDot>Retired</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-2 items-center">
      <Badge {...args} size="sm">Small</Badge>
      <Badge {...args} size="md">Medium</Badge>
    </div>
  ),
};
