import React, { useState } from 'react';
import type { DataTableProps } from './DataTable.types';

export const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  isLoading = false,
  emptyMessage = 'No records found.',
  searchPlaceholder = 'Search',
  onSearch,
  onAddClick,
  addBtnText = '+ Add New Asset',
  onFilterClick,
  showPagination = true,
  totalRecords = 60,
  currentPage = 1,
  pageSize = 10,
  onPageChange,
  className = '',
}: DataTableProps<T>): React.ReactElement => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(currentPage);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(data.map((_, idx) => idx));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handlePage = (page: number) => {
    setActivePage(page);
    if (onPageChange) onPageChange(page);
  };

  return (
    <div
      className={`w-full bg-white rounded-[10px] border border-[rgba(162,161,168,0.2)] p-5 font-['Lexend',sans-serif] shadow-sm ${className}`}
    >
      {/* Top Toolbar (Search, Add, Filter) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
        <div className="relative w-full sm:w-[330px] h-[50px]">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-[#16151C]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder={searchPlaceholder}
            onChange={(e) => onSearch && onSearch(e.target.value)}
            className="w-full h-full pl-11 pr-4 rounded-[10px] border border-[rgba(162,161,168,0.2)] text-sm text-[#16151C] placeholder-[#16151C]/30 focus:outline-none focus:border-[#41BFAA] transition-colors"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={onAddClick}
            className="h-[50px] px-6 bg-[#41BFAA] hover:bg-[#38ab98] text-white font-bold text-[16px] rounded-[10px] flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8" />
            </svg>
            <span>{addBtnText}</span>
          </button>

          <button
            onClick={onFilterClick}
            className="h-[50px] px-5 border border-[#41BFAA] hover:bg-[#41BFAA]/5 text-[#16151C] font-light text-[16px] rounded-[10px] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5 text-[#16151C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Solid Teal Header Table */}
      <div className="w-full overflow-x-auto rounded-[8px] border border-[rgba(162,161,168,0.15)]">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#41BFAA] text-white h-[44px]">
            <tr>
              <th className="w-[45px] px-3 text-center">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === data.length && data.length > 0}
                  className="w-4 h-4 rounded border-gray-300 text-[#41BFAA] focus:ring-[#41BFAA] cursor-pointer accent-[#41BFAA]"
                />
              </th>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-3.5 text-[16px] font-bold tracking-tight ${
                    col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                  style={{ width: col.width }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-[rgba(162,161,168,0.15)] bg-white text-[#16151C]">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <tr key={idx} className="h-[52px] animate-pulse">
                  <td className="px-3 text-center">
                    <div className="w-4 h-4 bg-gray-200 rounded mx-auto" />
                  </td>
                  {columns.map((_, cIdx) => (
                    <td key={cIdx} className="px-3.5">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-12 text-center text-[#A2A1A8]">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((item, rowIdx) => {
                const isChecked = selectedRows.includes(rowIdx);
                return (
                  <tr
                    key={rowIdx}
                    className={`h-[52px] transition-colors duration-150 hover:bg-[#41BFAA]/5 ${
                      isChecked ? 'bg-[#41BFAA]/10' : ''
                    }`}
                  >
                    <td className="w-[45px] px-3 text-center">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleSelectRow(rowIdx)}
                        className="w-4 h-4 rounded border-gray-300 text-[#41BFAA] focus:ring-[#41BFAA] cursor-pointer accent-[#41BFAA]"
                      />
                    </td>
                    {columns.map((col, colIdx) => (
                      <td
                        key={colIdx}
                        className={`px-3.5 text-[16px] font-light text-[#16151C] ${
                          col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                        }`}
                      >
                        {col.render ? col.render(item) : String(item[col.key as string] ?? '-')}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      {showPagination && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-2 text-[#A2A1A8] text-[14px] font-light">
          <div className="flex items-center gap-3">
            <span>Showing</span>
            <div className="h-[38px] px-3 border border-[rgba(162,161,168,0.2)] rounded-[8px] bg-white flex items-center gap-2 text-[#16151C] font-normal cursor-pointer">
              <span>{pageSize}</span>
              <svg className="w-3.5 h-3.5 text-[#16151C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="text-center">
            Showing 1 to {Math.min(pageSize, data.length)} out of {totalRecords} records
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handlePage(Math.max(1, activePage - 1))}
              disabled={activePage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-[#16151C] disabled:opacity-30 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => handlePage(num)}
                className={`w-8 h-8 rounded-lg text-[14px] font-medium transition-colors cursor-pointer ${
                  activePage === num
                    ? 'bg-[#41BFAA]/15 text-[#41BFAA] border border-[#41BFAA]/30 font-semibold'
                    : 'text-[#16151C] hover:bg-gray-100'
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => handlePage(activePage + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-[#16151C] cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};