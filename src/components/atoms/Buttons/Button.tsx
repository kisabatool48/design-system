import React from 'react';
import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-brand dark:bg-brand-dark hover:bg-brand-hover text-black focus:ring-brand shadow-sm',
    secondary: 'bg-darkElement text-white hover:bg-black dark:bg-lightSurface dark:text-lightText',
    outline: 'border border-lightBorder dark:border-darkBorder bg-transparent hover:bg-lightSurface dark:hover:bg-darkSurface text-lightText dark:text-darkText',
    ghost: 'bg-transparent hover:bg-lightSurface dark:hover:bg-darkSurface text-lightText dark:text-darkText',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
      ) : null}
      {children}
    </button>
  );
};