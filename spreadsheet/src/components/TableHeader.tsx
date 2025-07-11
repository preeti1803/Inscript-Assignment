const headers = [
  'Job Request',
  'Submitted',
  'Status',
  'Submitter',
  'URL',
  'Assigned',
  'Priority',
  'Due Date',
  'Est. Value',
];

const TableHeader = () => {
  return (
    <thead className="sticky top-0 bg-gray-100 z-10">
      <tr className="text-sm text-left text-gray-700 font-semibold border-b">
        {headers.map((label, idx) => (
          <th key={idx} className="p-2 whitespace-nowrap">
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
