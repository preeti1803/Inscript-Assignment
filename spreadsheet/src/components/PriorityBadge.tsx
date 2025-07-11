import React from "react";
type Props = { priority: string }

const PriorityBadge = ({ priority }: Props) => {
  const colors: Record<string, string> = {
    High: 'text-red-600',
    Medium: 'text-yellow-600',
    Low: 'text-blue-600',
  };

  return (
    <span className={`text-sm font-medium ${colors[priority] || 'text-gray-600'}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;
