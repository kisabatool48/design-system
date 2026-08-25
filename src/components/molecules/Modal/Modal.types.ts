import React from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface QRModalData {
  assetId: string;
  assetName: string;
  serialNumber: string;
  assignedTo: string;
  category: string;
}