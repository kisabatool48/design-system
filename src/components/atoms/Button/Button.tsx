import React from 'react';
import type { ButtonProps, ButtonSize, ButtonVariant, ButtonShape } from './Button.types';

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-sans font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-darkBg disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand hover:bg-brand-hover dark:bg-brand-dark dark:hover:bg-brand-hover text-black focus:ring-brand shadow-sm',
  secondary:
    'bg-darkElement text-white hover:bg-black dark:bg-lightSurface dark:text-lightText dark:hover:bg-lightBorder focus:ring-brand',
  outline:
    'border border-lightBorder dark:border-darkBorder bg-transparent hover:bg-lightSurface dark:hover:bg-darkSurface text-lightText dark:text-darkText focus:ring-brand',
  ghost:
    'bg-transparent hover:bg-lightSurface dark:hover:bg-darkSurface text-lightText dark:text-darkText focus:ring-brand',
  link: 'bg-transparent text-lightText dark:text-darkText hover:underline focus:ring-brand',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const iconOnlySizeStyles: Record<ButtonSize, string> = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-3',
};

const shapeStyles: Record<ButtonShape, string> = {
  rectangle: 'rounded-lg',
  pill: 'rounded-full',
};

const spinnerSizeStyles: Record<ButtonSize, string> = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    size = 'md',
    shape = 'rectangle',
    isLoading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    className = '',
    disabled,
    ...rest
  } = props;

  const isIconOnly = props.iconOnly === true;

  const spinner = (
    <span
      className={`inline-block animate-spin border-2 border-current border-t-transparent rounded-full ${spinnerSizeStyles[size]}`}
    />
  );

  const classes = [
    baseStyles,
    variantStyles[variant],
    isIconOnly ? iconOnlySizeStyles[size] : sizeStyles[size],
    shapeStyles[shape],
    fullWidth && !isIconOnly ? 'w-full' : '',
    isIconOnly ? 'aspect-square' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (isIconOnly) {
    const { icon, iconOnly, 'aria-label': ariaLabel, ...iconRest } = rest as any;
    return (
      <button
        className={classes}
        disabled={disabled || isLoading}
        aria-label={ariaLabel}
        {...iconRest}
      >
        {isLoading ? spinner : icon}
      </button>
    );
  }

  const { children, iconOnly, ...textRest } = rest as any;

  return (
    <button className={classes} disabled={disabled || isLoading} {...textRest}>
      {isLoading ? spinner : leftIcon}
      {!isLoading && children}
      {!isLoading && rightIcon}
    </button>
  );
};