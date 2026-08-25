export interface NavLinkItem {
  label: string;
  hasDropdown?: boolean;
}

export interface NavbarProps {
  brandName?: string;
  theme?: 'dark' | 'light';
  navLinks?: NavLinkItem[];
  ctaText?: string;
  onLinkClick?: (label: string) => void;
  onCtaClick?: () => void;
  className?: string;
}