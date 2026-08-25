import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
}

export interface SidebarProps {
  items: NavItem[];
  activeId: string;
  onSelect: (id: string) => void;
  brandName?: string;
  theme?: 'dark' | 'light';
  user?: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
}