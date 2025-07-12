// src/components/ActionToolbar.tsx
import {
  EyeOff,
  ArrowDownWideNarrow,
  Filter,
  ChevronRight,
  Upload,
  Download,
  Share2,
} from "lucide-react";
import React, { useState, useRef } from "react";
import cell from "../assets/cell view.svg";
import fork from "../assets/fork.svg";

const ActionToolbar = () => {
  const [isCellView, setIsCellView] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const toggleView = () => {
    setIsCellView((prev) => !prev);
    console.log(`Switched to ${!isCellView ? "Cell View" : "Grid View"}`);
  };

  const handleHideFields = () => {
    setIsHidden((prev) => !prev);
    console.log(isHidden ? "Showing fields" : "Hiding fields");
    // UI logic to conditionally hide/show specific columns can go here
  };

  const handleSort = () => {
    setIsSorted((prev) => !prev);
    console.log(isSorted ? "Removed sorting" : "Applied sorting");
    // Apply/remove sorting logic to your table here
  };

  const handleFilter = () => {
    setIsFiltered((prev) => !prev);
    console.log(isFiltered ? "Cleared filters" : "Applied filters");
    // Apply/remove filter UI or logic here
  };

  const handleImport = () => {
    console.log("Triggering file input for import...");
    fileInputRef.current?.click();
  };

  const handleExport = () => {
    const dummyData = [
      ["#", "Task Name", "Due Date"],
      ["1", "Example Task", "2025-07-15"],
    ];
    const csvContent = dummyData.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Exported data to CSV");
  };

  const handleShare = () => {
    console.log("Generating shareable link...");
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleNewAction = () => {
    console.log("Open modal or drawer to create new action/task");
    alert("New action triggered! Open your modal or form here.");
  };

  return (
    <div className="flex justify-between items-center bg-white px-4 py-2 text-sm text-gray-600">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 hover:text-black">
          <span>Tool bar</span>
          <ChevronRight className="w-3 h-3" />
        </button>

        <button
          onClick={handleHideFields}
          className="flex items-center gap-1 hover:text-black"
        >
          <EyeOff className="w-4 h-4" />
          <span>{isHidden ? "Show fields" : "Hide fields"}</span>
        </button>

        <button
          onClick={handleSort}
          className="flex items-center gap-1 hover:text-black"
        >
          <ArrowDownWideNarrow className="w-4 h-4" />
          <span>{isSorted ? "Unsort" : "Sort"}</span>
        </button>

        <button
          onClick={handleFilter}
          className="flex items-center gap-1 hover:text-black"
        >
          <Filter className="w-4 h-4" />
          <span>{isFiltered ? "Clear filter" : "Filter"}</span>
        </button>

        <button
          onClick={toggleView}
          className="flex items-center gap-1 hover:text-black"
        >
          <img
            src={cell}
            className={`w-4 h-4 ${!isCellView && "opacity-30"}`}
          />
          <span>{isCellView ? "Cell view" : "Grid view"}</span>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              console.log(`Imported file: ${file.name}`);
              // Add logic to read/parse file content if needed
            }
          }}
        />

        <button
          onClick={handleImport}
          className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded bg-gray-50 hover:bg-gray-100"
        >
          <Upload className="w-4 h-4" />
          Import
        </button>

        <button
          onClick={handleExport}
          className="flex items-center gap-1 border border-gray-300 px-2 py-1 rounded bg-gray-50 hover:bg-gray-100"
        >
          <Download className="w-4 h-4" />
          Export
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1 border border-gray-300 px-2 py-1 rounded bg-gray-50 hover:bg-gray-100"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>

        <button
          onClick={handleNewAction}
          className="flex items-center gap-1 bg-green-700 text-white px-3 py-1.5 rounded hover:bg-green-800"
        >
          <img src={fork} className="w-4 h-4" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default ActionToolbar;
