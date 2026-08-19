import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    label: { control: 'text' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Asset name',
    placeholder: 'e.g. Handheld scanner #14',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: { helperText: 'Shown to warehouse staff on the label printout.' },
};

export const WithError: Story = {
  args: { error: 'Asset name is required.', required: true },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'SCN-0014' },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 max-w-xs">
      <Input {...args} size="sm" label="Small" />
      <Input {...args} size="md" label="Medium" />
      <Input {...args} size="lg" label="Large" />
    </div>
  ),
};

// --- Attached button ---

export const WithRightButton: Story = {
  args: {
    label: 'Asset tag',
    placeholder: 'SCN-0014',
    rightButton: { content: 'Scan' },
  },
};

export const WithLeftButton: Story = {
  args: {
    label: 'Asset tag',
    placeholder: 'SCN-0014',
    leftButton: { content: 'Go' },
  },
};

export const CopyToClipboard: Story = {
  args: {
    label: 'Share link',
    defaultValue: 'https://app.warehouse.io/assets/scn-0014',
    rightButton: { content: 'Copy' },
  },
};

// --- Attached dropdown ---

export const WithLeftDropdown: Story = {
  args: {
    label: 'Unit price',
    placeholder: '0.00',
    leftDropdown: {
      options: [
        { label: '$', value: 'USD' },
        { label: '€', value: 'EUR' },
        { label: '£', value: 'GBP' },
      ],
      defaultValue: 'USD',
    },
  },
};

export const WithRightDropdown: Story = {
  args: {
    label: 'Item weight',
    placeholder: '0',
    rightDropdown: {
      options: [
        { label: 'kg', value: 'kg' },
        { label: 'lb', value: 'lb' },
      ],
      defaultValue: 'kg',
    },
  },
};
