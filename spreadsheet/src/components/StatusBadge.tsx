// import React from "react"
interface StatusBadgeProps {
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const base = "px-3 py-1 rounded-full text-sm font-medium inline-block center";
  const statusStyles = {
    "In-process": "bg-yellow-100 text-yellow-800",
    "Need to start": "bg-slate-200 text-slate-800",
    Complete: "bg-green-100 text-green-800",
    Blocked: "bg-red-100 text-red-700",
  };

  return <span className={`${base} ${statusStyles[status]}`}>{status}</span>;
}
