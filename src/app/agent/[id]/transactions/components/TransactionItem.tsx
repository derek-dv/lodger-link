import TransactionType from "@/app/types/transaction";
import Link from "next/link";
import React from "react";

const TransactionItem: React.FC<TransactionType> = ({
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
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Link className="text-blue-700 hover:underline" href="#">
          {name}
        </Link>
      </td>
      <td scope="col" className="px-6 py-3 font-normal">
        ${amount}
      </td>
      <td scope="col" className="px-6 py-3 font-normal">
        {date}
      </td>
      <td scope="col" className="px-6 py-3 font-normal">
        <p className={`px-2 rounded text-black w-fit ${statusClass}`}>
          {_status}
        </p>
      </td>
    </tr>
  );
};

export default TransactionItem;
