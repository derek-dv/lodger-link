import TransactionType from "@/app/types/transaction";
import React from "react";

const TransactionTableItem: React.FC<TransactionType> = ({
  amount,
  date,
  name,
  status,
}) => {
  const _status =
    status === "cancelled"
      ? "Cancelled"
      : status === "failed"
      ? "Failed"
      : status === "pending"
      ? "Pending"
      : "Success";

  const statusClass =
    status === "cancelled"
      ? "bg-red-500"
      : status === "failed"
      ? "bg-red-500"
      : status === "pending"
      ? "bg-yellow-300"
      : "bg-green-400";
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <th scope="col" className="px-6 py-3 font-normal">
        ${amount}
      </th>
      <th scope="col" className="px-6 py-3 font-normal">
        {date}
      </th>
      <th scope="col" className="px-6 py-3 font-normal">
        <p className={`px-2 rounded text-black w-fit ${statusClass}`}>
          {_status}
        </p>
      </th>
    </tr>
  );
};

export default TransactionTableItem;
