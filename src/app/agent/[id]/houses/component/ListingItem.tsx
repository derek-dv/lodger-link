import { ListingType } from "@/app/types/listing";
import Link from "next/link";
import React from "react";

const ListingItem: React.FC<ListingType> = ({
  title,
  status,
  price,
  location,
  type,
}) => {
  const _status = status === "available" ? "Available" : "Unavailable";

  const statusClass = status === "available" ? "bg-green-400" : "bg-red-500";

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Link className="text-blue-700 hover:underline" href="#">
          {title}
        </Link>
      </td>
      <td scope="col" className="px-6 py-3 font-normal">
        {location}
      </td>
      <td scope="col" className="px-6 py-3 font-normal">
        ${price}
      </td>
      <td scope="col" className="px-6 py-3 font-normal">
        {type}
      </td>
      <td scope="col" className="px-6 py-3 font-normal">
        <p className={`px-2 rounded text-black w-fit ${statusClass}`}>
          {_status}
        </p>
      </td>
    </tr>
  );
};

export default ListingItem;
