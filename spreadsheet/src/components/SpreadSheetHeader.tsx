// src/components/SpreadsheetHeaderFull.tsx
import React, { useState } from "react";
import {
  Link2,
  RefreshCw
  
} from "lucide-react";
import purplefork from "../assets/fork.svg";

export default function SpreadsheetHeaderFull() {
  const [tabs, setTabs] = useState([
    "Q3 Financial Overview",
    "ABC",
    "Answer a question",
    "Extract",
  ]);

  const handleAddTab = () => {
    setTabs([...tabs, `Untitled ${tabs.length + 1}`]);
    console.log("New tab added");
  };
  const handle = () => {
    console.log("New action");
  };

  return (
    <div className="w-full text-sm font-medium">
      {/* 🔹 Top Tabs Header */}
      <div className="flex items-center px-2 py-1 bg-gray-100 border-b overflow-x-auto whitespace-nowrap">
        <div className="flex items-center bg-white px-2 py-1 rounded-md shadow-sm border mr-1 gap-1">
          <Link2 className="w-4 h-4 text-blue-500" />
          <span className="text-gray-700 w-[500px]">Q3 Financial Overview</span>
          <RefreshCw className="w-3.5 h-3.5 text-orange-500" />
        </div>

        <button
          onClick={handle}
          className="flex items-center px-3 py-1 bg-green-100 text-green-900 cursor-pointer rounded-md mr-1 gap-1 -mr-[100px]"
        >
          <img src={purplefork} className="w-4 h-4 filter invert sepia " />
          ABC
        </button>

        <button
          onClick={handle}
          className="flex items-center px-3 py-1 bg-purple-100 text-purple-900 cursor-pointer rounded-md mr-1 gap-1"
        >
          <img src={purplefork} className="w-4 h-4 filter invert sepia " />
          Answer a question
        </button>

        <button
          onClick={handle}
          className="flex items-center px-3 py-1 bg-orange-100 text-orange-900 rounded-md cursor-pointer mr-1 gap-1"
        >
          <img src={purplefork} className="w-4 h-4 filter invert sepia " />
          Extract
        </button>

        <button
          onClick={handleAddTab}
          className="text-xl px-3 py-1 text-gray-700 font-medium cursor-pointer -mr-[100px]"
        >
          +
        </button>
      </div>
    </div>
  );
}
