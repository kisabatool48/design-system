import React from 'react';

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
  // Toolbar controls
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  onAddClick?: () => void;
  addBtnText?: string;
  onFilterClick?: () => void;
  // Pagination controls
  showPagination?: boolean;
  totalRecords?: number;
  currentPage?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}