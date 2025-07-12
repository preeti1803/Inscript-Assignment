import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe, User2 } from "lucide-react";
import assigned from "../assets/assigned.svg";
import statusIcon from "../assets/Chevron Circle.svg";
import cal from "../assets/cal.svg";
import job from "../assets/job.svg";
import StatusBadge from "./Statusbadge";
import PriorityBadge from "./PriorityBadge";
import { tableData } from "../data/tableData"; // ← import from JS file

export default function SpreadsheetTable() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const statuses = [
    "In-process",
    "Need to start",
    "Complete",
    "Blocked",
  ] as const;
  type StatusType = typeof statuses[number];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const priorities = ["High", "Medium", "Low"] as const;
  type PriorityType = (typeof priorities)[number];

  // Convert tableData to array-of-arrays for easier cell editing
  const formattedData = tableData.map((item, i) => [
    `${i + 1}`,
    item.job,
    item.submitted,
    item.status,
    item.submitter,
    item.url,
    item.assigned,
    item.priority,
    item.dueDate,
    item.value,
    "",
  ]);

  const [data, setData] = useState(formattedData);
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(
    null,
  );
  const inputRefs = useRef<(HTMLInputElement | null)[][]>([]);

  useEffect(() => {
    inputRefs.current = Array(20)
      .fill(null)
      .map((_, row) =>
        Array(data[0]?.length || 0)
          .fill(null)
          .map((_, col) => inputRefs.current[row]?.[col] || null),
      );
  }, [data]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    row: number,
    col: number,
  ) => {
    let targetRow = row;
    let targetCol = col;

    if (e.key === "ArrowDown") targetRow++;
    if (e.key === "ArrowUp") targetRow--;
    if (e.key === "ArrowRight") targetCol++;
    if (e.key === "ArrowLeft") targetCol--;

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
    col: number,
  ) => {
    const newData = [...data];
    if (!newData[row]) newData[row] = Array(data[0].length).fill("");
    newData[row][col] = e.target.value;
    setData(newData);
  };

  const handleClick = (row: number, col: number) => {
    setSelected({ row, col });
  };

  const headerClass =
    "px-2 py-2 border border-gray-300 flex items-center gap-1 font-semibold text-sm";

  const headers = [
    "#",
    <>
      <img src={job} className="w-4 h-4" /> Job Request
    </>,
    <>
      <img src={cal} className="w-4 h-4" /> Submitted
    </>,
    <>
      <img src={statusIcon} className="w-4 h-4" /> Status
    </>,
    <>
      <User2 className="w-4 h-4 text-gray-600" /> Submitter
    </>,
    <>
      <Globe className="w-4 h-4 text-gray-600" /> URL
    </>,
    <>
      <img src={assigned} className="w-4 h-4" /> Assigned
    </>,
    "Priority",
    "Due Date",
    "Est. Value",
    "Add",
  ];

  const columnWidths =
    "grid-cols-[40px_200px_160px_140px_180px_180px_160px_160px_160px_160px_160px]";

  return (
    <div className="border rounded-md max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* Header Row */}
      <div
        className={`grid ${columnWidths} sticky top-0 bg-gray-100 text-gray-700 text-xs z-10`}
      >
        {headers.map((header, i) => (
          <div
            key={i}
            className={`${headerClass} ${
              i === 6
                ? "bg-green-100 text-green-900"
                : i === 7 || i === 8
                  ? "bg-purple-100 text-purple-900"
                  : i === 9
                    ? "bg-orange-100 text-orange-900"
                    : ""
            }`}
          >
            {header}
            {i !== 0 && i !== headers.length - 1 && (
              <ChevronDown className="w-3 h-3 text-gray-400" />
            )}
          </div>
        ))}
      </div>

      {/* Rows */}
      {[...Array(Math.max(20, data.length))].map((_, rowIndex) => {
        const rowData = data[rowIndex] || Array(headers.length).fill("");

        return (
          <div
            key={rowIndex}
            className={`grid ${columnWidths} text-sm hover:bg-gray-50`}
          >
            {rowData.map((cell, colIndex) => {
              const isSelected =
                selected?.row === rowIndex && selected?.col === colIndex;

              return (
                <div
                  key={colIndex}
                  className={`border border-gray-300 px-2 py-1 ${isSelected ? "border-2 border-green-500" : ""}`}
                  onClick={() => handleClick(rowIndex, colIndex)}
                >
                  {colIndex === 3 ? (
                    <div className="flex items-center justify-center h-full">
                      <StatusBadge status={cell as StatusType} />
                    </div>
                  ) : colIndex === 7 ? (
                    <div className="flex items-center justify-center h-full">
                      <PriorityBadge priority={cell as PriorityType} />
                    </div>
                  ) : (
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
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
