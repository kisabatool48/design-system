import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const QRModalStoryWrapper = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="primary">
        Open Asset QR Modal
      </Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Asset QR Code"
        subtitle="Hardware verification pass"
        footer={
          <div className="flex items-center gap-3">
            {/* High-Contrast Clear Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-transparent border border-white/40 hover:border-white hover:bg-white/10 rounded-lg transition-all cursor-pointer"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Close
            </button>

            {/* Teal Action Button */}
            <button
              onClick={() => alert('Downloading QR Badge...')}
              className="px-5 py-2.5 text-xs font-semibold text-[#0D0D0D] bg-[#66CFC4] hover:bg-[#52B8AD] rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Download Badge (PNG)
            </button>
          </div>
        }
      >
        <div className="flex flex-col items-center gap-5 text-center">
          {/* White QR Plate */}
          <div className="p-4 bg-white rounded-xl shadow-md border-2 border-[#66CFC4]/40 flex flex-col items-center">
            <svg className="w-44 h-44" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" fill="white" />
              <rect x="10" y="10" width="25" height="25" fill="#0D0D0D" />
              <rect x="15" y="15" width="15" height="15" fill="white" />
              <rect x="18" y="18" width="9" height="9" fill="#0D0D0D" />
              <rect x="65" y="10" width="25" height="25" fill="#0D0D0D" />
              <rect x="70" y="15" width="15" height="15" fill="white" />
              <rect x="73" y="18" width="9" height="9" fill="#0D0D0D" />
              <rect x="10" y="65" width="25" height="25" fill="#0D0D0D" />
              <rect x="15" y="70" width="15" height="15" fill="white" />
              <rect x="18" y="73" width="9" height="9" fill="#0D0D0D" />
              <rect x="42" y="12" width="6" height="6" fill="#0D0D0D" />
              <rect x="52" y="20" width="6" height="6" fill="#0D0D0D" />
              <rect x="42" y="42" width="16" height="16" fill="#66CFC4" />
              <rect x="12" y="45" width="8" height="8" fill="#0D0D0D" />
              <rect x="25" y="45" width="8" height="8" fill="#0D0D0D" />
              <rect x="65" y="45" width="8" height="8" fill="#0D0D0D" />
              <rect x="78" y="55" width="10" height="10" fill="#0D0D0D" />
              <rect x="45" y="68" width="8" height="8" fill="#0D0D0D" />
              <rect x="65" y="75" width="15" height="8" fill="#0D0D0D" />
            </svg>
            <span className="text-[10px] font-mono tracking-widest text-[#697077] mt-2 uppercase">
              Scan to Audit
            </span>
          </div>

          {/* Dark Metadata Box */}
          <div className="w-full bg-[#0D0D0D] border border-[#272731] rounded-xl p-3.5 text-left text-xs space-y-1.5">
            <div className="flex justify-between">
              <span className="text-[#808990]">Asset ID:</span>
              <span className="font-mono font-bold text-[#66CFC4]">AST-001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#808990]">Item:</span>
              <span className="font-medium text-white">MacBook Pro 16" M3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#808990]">Category:</span>
              <span className="text-[#D5DBDE]">Hardware / Laptops</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#808990]">Serial No:</span>
              <span className="font-mono text-[#D5DBDE]">C02G89XYMD6R</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const AssetQRModal: Story = {
  render: () => <QRModalStoryWrapper />,
};