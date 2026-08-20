import React from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'menuItem'
  | 'subMenuItem'
  | 'badge';

export type TypographyElement =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  /** Which HTML tag to render — lets you decouple visual size from semantic heading order */
  as?: TypographyElement;
  weight?: 'regular' | 'semibold' | 'bold';
  muted?: boolean;
  truncate?: boolean;
  children: React.ReactNode;
}
