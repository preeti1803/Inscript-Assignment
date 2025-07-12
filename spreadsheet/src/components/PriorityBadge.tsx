// import React from "react";
interface PriorityBadgeProps {
  priority: "High" | "Medium" | "Low";
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  const base = "text-sm font-semibold text-center";

  const priorityStyles = {
    High: "text-red-500",
    Medium: "text-[rgba(194,146,16,1)]",
    Low: "text-blue-600",
  };

  return (
    <span className={`${base} ${priorityStyles[priority]}`}>{priority}</span>
  );
}
