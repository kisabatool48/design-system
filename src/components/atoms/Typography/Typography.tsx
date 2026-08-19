import React from 'react';
import type { TypographyProps, TypographyVariant, TypographyElement } from './Typography.types';

const sizeStyles: Record<TypographyVariant, string> = {
  h1: 'text-2xl',
  h2: 'text-xl',
  h3: 'text-lg',
  body: 'text-base',
  menuItem: 'text-[1rem]',       
  subMenuItem: 'text-[0.969rem]', 
  badge: 'text-[0.75rem]',        
};

const defaultElement: Record<TypographyVariant, TypographyElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  menuItem: 'span',
  subMenuItem: 'span',
  badge: 'span',
};

const weightStyles = {
  regular: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  weight = 'regular',
  muted = false,
  truncate = false,
  className = '',
  children,
  ...props
}) => {
  const Tag = (as || defaultElement[variant]) as React.ElementType;

  const colorStyles = muted
    ? 'text-lightText/60 dark:text-darkText/60'
    : 'text-lightText dark:text-darkText';

  const truncateStyles = truncate ? 'overflow-hidden text-ellipsis whitespace-nowrap max-w-full' : '';

  return (
    <Tag
      className={`font-sans ${sizeStyles[variant]} ${weightStyles[weight]} ${colorStyles} ${truncateStyles} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
