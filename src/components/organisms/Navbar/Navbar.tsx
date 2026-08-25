import React from 'react';
import type { NavbarProps } from './Navbar.types';

const defaultLinks = [
  { label: 'Product', hasDropdown: true },
  { label: 'Resources', hasDropdown: true },
  { label: 'Customers', hasDropdown: false },
  { label: 'Pricing', hasDropdown: false },
];

export const Navbar: React.FC<NavbarProps> = ({
  brandName = 'logo',
  theme = 'light',
  navLinks = defaultLinks,
  ctaText = 'Start for free',
  onLinkClick,
  onCtaClick,
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <header
      className={`w-full h-16 px-6 sm:px-12 flex items-center justify-between font-['Poppins',sans-serif] transition-colors duration-200 ${
        isDark
          ? 'bg-[#0D0D0D] border-b border-[#272731]'
          : 'bg-white border-b border-gray-100'
      } ${className}`}
      style={{
        boxShadow: isDark
          ? '0px 3px 8px rgba(9, 30, 66, 0.16), 0px 0px 1px rgba(9, 30, 66, 0.31)'
          : '0px 1px 2px rgba(0, 0, 0, 0.04)',
      }}
    >
      {/* Left: Geometric Logo + Nav Links */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <div className="flex items-center gap-1">
            <div className={`w-3.5 h-6 rounded-sm -skew-x-12 ${isDark ? 'bg-white' : 'bg-[#1F2937]'}`} />
            <div className="w-3.5 h-6 bg-[#0D938C] rounded-sm -skew-x-12" />
          </div>
          <span className={`text-lg font-bold tracking-tight lowercase ${isDark ? 'text-white' : 'text-[#1F2937]'}`}>
            {brandName}
          </span>
        </div>

        {/* Center Links (Light layout behavior, hover teal #0D938C) */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => onLinkClick && onLinkClick(item.label)}
              className={`text-[14px] font-normal transition-colors duration-200 flex items-center gap-1 focus:outline-none cursor-pointer ${
                isDark
                  ? 'text-[#A0AAB0] hover:text-[#0D938C]'
                  : 'text-[#1F2937] hover:text-[#0D938C]'
              }`}
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <svg
                  className="w-3 h-3 text-[#6B7280] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Right Side CTAs */}
      <div className="flex items-center gap-3">
        <button
          className={`text-[14px] font-medium px-4 py-2 rounded-lg border transition-all duration-150 cursor-pointer ${
            isDark
              ? 'text-white border-[#272731] hover:bg-[#171717] hover:border-[#0D938C]/40'
              : 'text-[#1F2937] border-gray-200 hover:border-[#0D938C]/30 hover:bg-gray-50'
          }`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Sign in
        </button>

        <button
          onClick={onCtaClick}
          className="bg-[#0D938C] hover:bg-[#0b7e77] text-white text-[14px] font-medium px-[20px] py-[10px] rounded-lg transition-all duration-150 shadow-sm active:scale-95 cursor-pointer"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {ctaText}
        </button>
      </div>
    </header>
  );
};