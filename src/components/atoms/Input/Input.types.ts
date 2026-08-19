import React from 'react';

export interface InputButtonAddon {
  content: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  ariaLabel?: string;
  props?: Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onClick' | 'disabled' | 'children'
  >;
}

export interface InputDropdownOption {
  label: string;
  value: string;
}

export interface InputDropdownAddon {
  options: InputDropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  ariaLabel?: string;
  props?: Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'value' | 'defaultValue' | 'onChange' | 'disabled' | 'children'
  >;
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  helperText?: string;
  leftButton?: InputButtonAddon;
  rightButton?: InputButtonAddon;
  leftDropdown?: InputDropdownAddon;
  rightDropdown?: InputDropdownAddon;
}
