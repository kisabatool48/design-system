import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  showDot?: boolean;
  children: React.ReactNode;
}
