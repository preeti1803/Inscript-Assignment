// src/components/SpreadsheetTable.tsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, User2 } from 'lucide-react';
import assigned from '../assets/assigned.svg';

export default function SpreadsheetTable() {
  const initialData = Array.from({ length: 100 }).map((_, i) => [
    `${i + 1}`, // Serial number
    `Task ${i + 1}`,
    '15-11-2024',
    'In-process',
    `Person ${i + 1}`,
    `https://example.com/${i + 1}`,
    `User ${i + 1}`,
    ['High', 'Medium', 'Low'][i % 3],
    '20-11-2024',
    `₹${(i + 1) * 100000}`,
  ]);

  const [data, setData] = useState(initialData);
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[][]>([]);

  useEffect(() => {
    inputRefs.current = Array(data.length)
      .fill(null)
      .map((_, row) =>
        Array(data[0].length)
          .fill(null)
          .map((_, col) => inputRefs.current[row]?.[col] || null)
      );
  }, [data]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    row: number,
    col: number
  ) => {
    let targetRow = row;
    let targetCol = col;

    if (e.key === 'ArrowDown') targetRow++;
    if (e.key === 'ArrowUp') targetRow--;
    if (e.key === 'ArrowRight') targetCol++;
    if (e.key === 'ArrowLeft') targetCol--;

    const nextInput = inputRefs.current[targetRow]?.[targetCol];
    if (nextInput) {
      nextInput.focus();
      setSelected({ row: targetRow, col: targetCol });
      e.preventDefault();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    row: number,
    col: number
  ) => {
    const newData = [...data];
    newData[row][col] = e.target.value;
    setData(newData);
  };

  const handleClick = (row: number, col: number) => {
    setSelected({ row, col });
  };

  const headerClass =
    'px-3 py-2 border border-gray-300 flex items-center gap-1 font-semibold text-sm';

  const headers = [
    '#',
    '📁 Job Request',
    '📅 Submitted',
    '● Status',
    <><User2 className="w-4 h-4 text-gray-600" /> Submitter</>,
    <><Globe className="w-4 h-4 text-gray-600" /> URL</>,
    <><img src={assigned} className="w-4 h-4" /> Assigned</>,
    'Priority',
    'Due Date',
    'Est. Value',
  ];

  return (
    <div className="border rounded-md max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* Header Row */}
      <div className="grid grid-cols-[40px_200px_160px_140px_180px_180px_160px_160px_160px_160px] sticky top-0 bg-gray-100 text-gray-700 text-xs z-10">
        {headers.map((header, i) => (
          <div
            key={i}
            className={`${headerClass} ${
              i === 6
                ? 'bg-green-100 text-green-900'
                : i === 7 || i === 8
                ? 'bg-purple-100 text-purple-900'
                : i === 9
                ? 'bg-orange-100 text-orange-900'
                : ''
            }`}
          >
            {header}
            {i !== 0 && <ChevronDown className="w-3 h-3 text-gray-400" />}
          </div>
        ))}
      </div>

      {/* Body Rows */}
      {data.map((rowData, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-[40px_200px_160px_140px_180px_180px_160px_160px_160px_160px] text-sm hover:bg-gray-50"
        >
          {rowData.map((cell, colIndex) => {
            const isSelected =
              selected?.row === rowIndex && selected?.col === colIndex;
            return (
              <div
                key={colIndex}
                className={`border border-gray-300 px-2 py-1 ${
                  isSelected ? 'border-2 border-green-500' : ''
                }`}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                <input
                  ref={(el) => {
                    if (!inputRefs.current[rowIndex]) {
                      inputRefs.current[rowIndex] = [];
                    }
                    inputRefs.current[rowIndex][colIndex] = el;
                  }}
                  value={cell}
                  onChange={(e) => handleChange(e, rowIndex, colIndex)}
                  onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                  className="w-full bg-transparent outline-none text-black"
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
