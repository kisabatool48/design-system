import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import type { NavItem } from './Sidebar.types';

const Icons = {
  Dashboard: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  Assets: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  Users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Analytics: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Settings: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const navigationItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Icons.Dashboard },
  { id: 'assets', label: 'Asset Portfolio', icon: Icons.Assets, badge: '4' },
  { id: 'employees', label: 'Employees', icon: Icons.Users },
  { id: 'analytics', label: 'Valuation Reports', icon: Icons.Analytics },
  { id: 'settings', label: 'System Settings', icon: Icons.Settings },
];

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const InteractiveSidebarWrapper = ({ theme, initialCollapsed = false }: { theme: 'dark' | 'light'; initialCollapsed?: boolean }) => {
  const [active, setActive] = useState('assets');
  const [collapsed, setCollapsed] = useState(initialCollapsed);

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'bg-[#171717]' : 'bg-[#F9FAFB]'}`}>
      <Sidebar
        items={navigationItems}
        brandName="logo"
        theme={theme}
        activeId={active}
        onSelect={(id) => setActive(id)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        user={{
          name: 'Alex Morgan',
          role: 'Asset Administrator',
        }}
      />
      <div className={`flex-1 p-8 text-sm ${theme === 'dark' ? 'text-[#808990]' : 'text-gray-600'}`}>
        <h2 className={`text-xl font-bold mb-2 capitalize ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {active} Content Area
        </h2>
        <p>Click items in the sidebar or toggle the collapse arrow button to test responsiveness.</p>
      </div>
    </div>
  );
};

export const DarkSidebar: Story = {
  args: {
    theme: "dark"
  },

  render: () => <InteractiveSidebarWrapper theme="dark" />
};

export const LightSidebar: Story = {
  args: {
    theme: "light"
  },

  render: () => <InteractiveSidebarWrapper theme="light" />
};

