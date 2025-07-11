type Props = {
  job: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  value: string;
};

const TableRow = ({
  job,
  submitted,
  status,
  submitter,
  url,
  assigned,
  priority,
  dueDate,
  value,
}: Props) => {
  // Inline StatusBadge Component (not imported)
  const StatusBadge = ({ status }: { status: string }) => {
    const colors: Record<string, string> = {
      'In-process': 'bg-yellow-200 text-yellow-800',
      'Complete': 'bg-green-200 text-green-800',
      'Need to start': 'bg-blue-200 text-blue-800',
      'Blocked': 'bg-red-200 text-red-800',
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${
          colors[status] || 'bg-gray-200 text-gray-800'
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <tr className="border-b hover:bg-gray-50 text-sm">
      <td className="p-2 w-60 truncate">{job}</td>
      <td className="p-2">{submitted}</td>
      <td className="p-2">
        <StatusBadge status={status} />
      </td>
      <td className="p-2">{submitter}</td>
      <td className="p-2 text-blue-500 underline cursor-pointer">{url}</td>
      <td className="p-2">{assigned}</td>
      <td className="p-2 text-yellow-700">{priority}</td>
      <td className="p-2">{dueDate}</td>
      <td className="p-2">{value}</td>
    </tr>
  );
};

export default TableRow;
