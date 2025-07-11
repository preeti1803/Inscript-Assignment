// src/components/SpreadsheetHeaderFull.tsx
import { Link2, RefreshCw, Split, ChevronDown, User2, Globe } from 'lucide-react';

export default function SpreadsheetHeaderFull() {
  return (
    <div className="w-full text-sm font-medium">
      {/* 🔹 Top Tabs Header */}
      <div className="flex items-center px-2 py-1 bg-gray-100 border-b overflow-x-auto whitespace-nowrap">
        <div className="flex items-center bg-white px-2 py-1 rounded-md shadow-sm border mr-1 gap-1" >
          <Link2 className="w-4 h-4 text-blue-500" />
          <span className="text-gray-700 w-[500px]">Q3 Financial Overview</span>
          <RefreshCw className="w-3.5 h-3.5 text-orange-500" />
        </div>

        <div className="flex items-center px-3 py-1 bg-green-100 text-green-900 rounded-md mr-1 gap-1 -mr-[100px]">
          <Split className="w-4 h-4 rotate-180" />
          ABC
        </div>

        <div className="flex items-center px-3 py-1 bg-purple-100 text-purple-900 rounded-md mr-1 gap-1">
          <Split className="w-4 h-4 rotate-180" />
          Answer a question
        </div>

        <div className="flex items-center px-3 py-1 bg-orange-100 text-orange-900 rounded-md mr-1 gap-1">
          <Split className="w-4 h-4 rotate-180" />
          Extract
        </div>

        <div className="text-xl px-3 py-1 text-gray-700 font-medium cursor-pointer -mr-[100px]">+</div>
</div>

      {/* 🔸 Table Column Headers */}
      {/* <div className="flex w-full bg-gray-100 border-b text-gray-700 text-xs">
  <div className="flex items-center px-2 py-1 w-6 justify-center text-gray-400">#</div>

  <div className="flex items-center gap-1 px-3 py-2 w-[220px]">
    <span className="text-gray-600">📁</span>
    Job Request
    <ChevronDown className="w-3 h-3 text-gray-400" />
  </div>

  <div className="flex items-center gap-1 px-3 py-2 w-[160px]">
    <span className="text-gray-600">📅</span>
    Submitted
    <ChevronDown className="w-3 h-3 text-gray-400" />
  </div>

  <div className="flex items-center gap-1 px-3 py-2 w-[140px]">
    <span className="text-gray-600">●</span>
    Status
    <ChevronDown className="w-3 h-3 text-gray-400" />
  </div>

  <div className="flex items-center gap-1 px-3 py-2 w-[180px]">
    <User2 className="w-4 h-4 text-gray-600" />
    Submitter
  </div>

  <div className="flex items-center gap-1 px-3 py-2 w-[180px]">
    <Globe className="w-4 h-4 text-gray-600" />
    URL
    <ChevronDown className="w-3 h-3 text-gray-400" />
  </div>

  <div className="flex items-center gap-1 px-3 py-2 w-[160px] bg-green-100 text-green-900">
    <Split className="w-4 h-4" />
    Assigned
  </div>

  <div className="flex items-center gap-1 px-3 py-2 w-[160px] bg-purple-100 text-purple-900">
    Priority
  </div>

  <div className="flex items-center gap-1 px-3 py-2 w-[160px] bg-purple-100 text-purple-900">
    Due Date
  </div>

  <div className="flex items-center gap-1 px-3 py-2 w-[160px] bg-orange-100 text-orange-900">
    Est. Value
  </div>

  <div className="w-6" />
</div> */}

    </div>
  );
}

