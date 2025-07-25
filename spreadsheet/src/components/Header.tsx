// import React from "react";
import { Search } from "lucide-react";

import Bell from "../assets/bell.svg";
import panel from "../assets/paneel.svg";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white  shadow-sm text-sm">
      <div className="flex items-center gap-2 text-gray-500">
        <img src={panel} alt="Panel" />
        <span className="text-gray-400">Workspace</span>
        <span className="text-gray-400">›</span>
        <span className="text-gray-400">Folder 2</span>
        <span className="text-gray-400">›</span>
        <span className="text-gray-700 font-semibold">Spreadsheet 3</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-10 pr-4 py-1.5  rounded-md  bg-gray-100 text-gray-600 focus:outline-none"
          />
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
        </div>
        <img src={Bell} alt="Bell" />
        <img
          src="https://i.pravatar.cc/24"
          alt="User avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-gray-700 font-medium">John Doe</span>
      </div>
    </div>
  );
}
