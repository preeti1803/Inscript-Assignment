import { useState } from "react";
import type { FC } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const Tabs: FC = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="fixed bottom-0 left-0 w-full flex bg-white  text-gray-600 text-sm">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 cursor-pointer  transition-all ${
            activeTab === tab
              ? "bg-green-100 text-green-900 font-semibold"
              : "hover:bg-gray-100"
          }`}
        >
          {tab}
        </div>
      ))}
      <div className="px-6 py-3 cursor-pointer hover:bg-gray-100">+</div>
    </div>
  );
};

export default Tabs;
