import React from 'react';
import type { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'md',
  showDot = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1 font-sans font-semibold rounded-full whitespace-nowrap';

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[0.75rem]',
    md: 'px-3 py-1 text-[0.75rem]',
  };

  const variantStyles = {
    neutral:
      'bg-gray-100 text-gray-700 border border-gray-200 ' +
      'dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700',

    success:
      'bg-green-100 text-green-700 border border-green-200 ' +
      'dark:bg-green-900/40 dark:text-green-400 dark:border-green-800',

    warning:
      'bg-amber-100 text-amber-700 border border-amber-200 ' +
      'dark:bg-amber-900/40 dark:text-amber-400 dark:border-amber-800',

    danger:
      'bg-red-100 text-red-700 border border-red-200 ' +
      'dark:bg-red-900/40 dark:text-red-400 dark:border-red-800',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {showDot && (
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      )}
      {children}
    </span>
  );
};