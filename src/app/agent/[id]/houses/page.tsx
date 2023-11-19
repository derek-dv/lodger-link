import { NextPage } from "next";
import _listings from "@/app/assets/listings.json";
import { ListingType } from "@/app/types/listing";
import ListingItem from "./component/ListingItem";
import Link from "next/link";

interface HousePageProps {
  params: {
    id: string;
  };
}

const HousePage: NextPage<HousePageProps> = ({ params: { id } }) => {
  const listings = _listings.listings.slice(-20);
  // Your component logic here
  console.log(id);

  return (
    <div>
      <div className="mx-4 mt-4">
        <div className="flex items-center">
          <h2 className="font-bold text-lg mb-3">Your houses</h2>
          <button className="ml-auto bg-blue-500 px-2 py-2 rounded text-white transition-all duration-100 hover:bg-blue-700">
            Add new listing
          </button>
        </div>
        <div className="my-3">
          <select name="" id="">
            <option value="">All houses</option>
            <option value="">Rented houses</option>
            <option value="">Available houses</option>
          </select>
        </div>
        <div className="">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  House
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing: ListingType, idx: number) => (
                <ListingItem key={idx} {...listing} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HousePage;
