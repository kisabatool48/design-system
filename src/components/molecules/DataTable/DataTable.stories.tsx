import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

interface AssetRecord {
  id: string;
  assetName: string;
  category: string;
  serialNumber: string;
  assignedTo: string;
  type: string;
  status: 'Active' | 'Under Maintenance' | 'Decommissioned';
}

const mockAssets: AssetRecord[] = [
  {
    id: 'AST-001',
    assetName: 'MacBook Pro 16" M3',
    category: 'Hardware / Laptops',
    serialNumber: 'C02G89XYMD6R',
    assignedTo: 'Alex Morgan',
    type: 'Office',
    status: 'Active',
  },
  {
    id: 'AST-002',
    assetName: 'Dell UltraSharp 27" 4K',
    category: 'Monitors',
    serialNumber: 'CN-098231-DL',
    assignedTo: 'Sarah Jenkins',
    type: 'Office',
    status: 'Active',
  },
  {
    id: 'AST-003',
    assetName: 'Ergonomic Standing Desk',
    category: 'Furniture',
    serialNumber: 'SD-4491-X',
    assignedTo: 'Design Studio 2',
    type: 'Office',
    status: 'Under Maintenance',
  },
  {
    id: 'AST-004',
    assetName: 'iPad Air (5th Gen)',
    category: 'Tablets',
    serialNumber: 'DM-992140',
    assignedTo: 'Dev Pool',
    type: 'Remote',
    status: 'Decommissioned',
  },
  {
    id: 'AST-005',
    assetName: 'Sony WH-1000XM5',
    category: 'Audio',
    serialNumber: 'SN-772102',
    assignedTo: 'Kristin Watson',
    type: 'Office',
    status: 'Active',
  },
  {
    id: 'AST-006',
    assetName: 'Logitech MX Master 3S',
    category: 'Peripherals',
    serialNumber: 'LG-338190',
    assignedTo: 'Devon Lane',
    type: 'Remote',
    status: 'Active',
  },
];

const assetColumns = [
  {
    key: 'assetName',
    header: 'Asset Name',
    width: '240px',
    render: (row: AssetRecord) => (
      <div>
        <div className="font-medium text-[#16151C] text-[15px]">{row.assetName}</div>
        <div className="text-[12px] text-[#A2A1A8] font-light">{row.category}</div>
      </div>
    ),
  },
  {
    key: 'id',
    header: 'Asset ID',
    render: (row: AssetRecord) => (
      <span className="font-mono text-xs font-semibold text-[#16151C]">
        {row.id}
      </span>
    ),
  },
  {
    key: 'serialNumber',
    header: 'Serial No',
    render: (row: AssetRecord) => (
      <span className="font-mono text-xs text-[#16151C]">{row.serialNumber}</span>
    ),
  },
  {
    key: 'assignedTo',
    header: 'Assigned User',
    render: (row: AssetRecord) => (
      <span className="text-[14px] text-[#16151C] font-light">{row.assignedTo}</span>
    ),
  },
  {
    key: 'type',
    header: 'Allocation',
    render: (row: AssetRecord) => (
      <span className="text-[14px] text-[#16151C] font-light">{row.type}</span>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    render: (row: AssetRecord) => {
      const isSuccess = row.status === 'Active';
      const isWarning = row.status === 'Under Maintenance';
      return (
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-sm text-[12px] font-normal ${
            isSuccess
              ? 'bg-[rgba(65,191,170,0.46)] text-[#000000]'
              : isWarning
              ? 'bg-amber-100 text-amber-900'
              : 'bg-rose-100 text-rose-800'
          }`}
        >
          {row.status}
        </span>
      );
    },
  },
  {
    key: 'action',
    header: 'Action',
    align: 'right' as const,
    render: (row: AssetRecord) => (
      <div className="flex items-center justify-end gap-3 text-[#16151C]">
        {/* View Action */}
        <button
          title="View Details"
          onClick={() => alert(`View details for: ${row.assetName}`)}
          className="p-1 hover:text-[#41BFAA] transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>

        {/* Edit Action */}
        <button
          title="Edit Asset"
          onClick={() => alert(`Edit record: ${row.assetName}`)}
          className="p-1 hover:text-[#41BFAA] transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>

        {/* Delete Action */}
        <button
          title="Delete Asset"
          onClick={() => alert(`Delete record: ${row.assetName}`)}
          className="p-1 hover:text-rose-500 transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    ),
  },
];

const meta: Meta<typeof DataTable<AssetRecord>> = {
  title: 'Molecules/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable<AssetRecord>>;

export const AssetListing: Story = {
  args: {
    data: mockAssets,
    columns: assetColumns,
    totalRecords: 60,
    pageSize: 10,
    searchPlaceholder: 'Search assets, serials...',
    addBtnText: '+ Add New Asset',
  },
};

export const LoadingState: Story = {
  args: {
    data: [],
    columns: assetColumns,
    isLoading: true,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: assetColumns,
    isLoading: false,
    emptyMessage: 'No assets registered under this category.',
  },
};