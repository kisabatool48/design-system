import React from 'react';
import type { SidebarProps } from './Sidebar.types';

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  activeId,
  onSelect,
  brandName = 'logo',
  theme = 'dark',
  user,
  collapsed = false,
  onToggleCollapse,
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <aside
      className={`h-screen flex flex-col justify-between font-['Poppins',sans-serif] transition-all duration-300 select-none ${
        collapsed ? 'w-20' : 'w-[273px]'
      } ${
        isDark
          ? 'bg-[#0D0D0D] border-r border-[#272731] text-[#D5DBDE]'
          : 'bg-white border-r border-gray-100 text-[#1F2937]'
      } ${className}`}
    >
      {/* Top Header & Navigation */}
      <div>
        {/* Brand Header */}
        <div
          className={`flex items-center h-16 px-5 border-b ${
            collapsed ? 'justify-center' : 'justify-between'
          } ${isDark ? 'border-[#272731]' : 'border-gray-100'}`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center gap-1 shrink-0">
              <div
                className={`w-3.5 h-6 rounded-sm -skew-x-12 ${
                  isDark ? 'bg-white' : 'bg-[#1F2937]'
                }`}
              />
              <div className="w-3.5 h-6 bg-[#0D938C] rounded-sm -skew-x-12" />
            </div>
            {!collapsed && (
              <span
                className={`text-lg font-bold tracking-tight lowercase ${
                  isDark ? 'text-white' : 'text-[#1F2937]'
                }`}
              >
                {brandName}
              </span>
            )}
          </div>

          {/* Toggle Collapse Button */}
          {!collapsed && onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDark
                  ? 'text-[#808990] hover:text-white hover:bg-[#171717]'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Collapse Sidebar"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>

        {/* Collapsed Expand Quick Action Bar */}
        {collapsed && onToggleCollapse && (
          <div className="flex justify-center py-2 border-b border-[#272731]/40">
            <button
              onClick={onToggleCollapse}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDark
                  ? 'text-[#808990] hover:text-white hover:bg-[#171717]'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Expand Sidebar"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Nav Items List */}
        <nav className="p-3 space-y-1.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                disabled={item.disabled}
                onClick={() => onSelect(item.id)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 relative cursor-pointer ${
                  collapsed ? 'justify-center px-0' : ''
                } ${
                  isActive
                    ? isDark
                      ? 'bg-[#171717] text-[#0D938C] font-semibold'
                      : 'bg-gray-50 text-[#0D938C] font-semibold'
                    : isDark
                    ? 'text-[#A0AAB0] hover:text-[#0D938C] hover:bg-[#171717]/60'
                    : 'text-[#4B5563] hover:text-[#0D938C] hover:bg-gray-50'
                } ${item.disabled ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#0D938C] rounded-r-full" />
                )}

                {/* Nav Icon */}
                <div
                  className={`shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#0D938C]'
                      : isDark
                      ? 'text-[#808990]'
                      : 'text-[#6B7280]'
                  }`}
                >
                  {item.icon}
                </div>

                {/* Nav Label & Badge */}
                {!collapsed && (
                  <div className="flex flex-1 items-center justify-between overflow-hidden">
                    <span className="truncate">{item.label}</span>
                    {item.badge !== undefined && (
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-[#0D938C]/20 text-[#0D938C]'
                            : isDark
                            ? 'bg-[#272731] text-[#808990]'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Footer Profile */}
      {user && (
        <div
          className={`p-3 border-t ${
            isDark ? 'border-[#272731] bg-[#0D0D0D]' : 'border-gray-100 bg-white'
          }`}
        >
          <div
            className={`flex items-center gap-3 p-2 rounded-xl ${
              collapsed ? 'justify-center p-0' : ''
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-[#0D938C]/15 border border-[#0D938C]/40 flex items-center justify-center font-bold text-xs text-[#0D938C] shrink-0">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                user.name.slice(0, 2).toUpperCase()
              )}
            </div>

            {!collapsed && (
              <div className="overflow-hidden flex-1 text-left">
                <div
                  className={`text-xs font-semibold truncate ${
                    isDark ? 'text-white' : 'text-[#1F2937]'
                  }`}
                >
                  {user.name}
                </div>
                <div className="text-[11px] text-[#808990] truncate">{user.role}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </aside>
  );
};