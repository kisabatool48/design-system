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
      'bg-lightSurface dark:bg-darkSurface text-lightBadge dark:text-darkBadge border border-lightBorder dark:border-darkBorder',
    success: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
    danger: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
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
