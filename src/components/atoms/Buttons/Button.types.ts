import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape = 'rectangle' | 'pill'; 


interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

interface TextButtonProps extends BaseButtonProps {
  children: React.ReactNode;
  iconOnly?: false;
}

interface IconOnlyButtonProps extends BaseButtonProps {
  children?: never;
  iconOnly: true;
  icon: React.ReactNode;
  'aria-label': string;
}

export type ButtonProps = TextButtonProps | IconOnlyButtonProps;