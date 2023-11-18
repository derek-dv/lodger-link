"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./component/Sidebar";
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import TransactionTableItem from "./component/TransactionTableItem";
import DashboardChart from "./component/DashboardChart";

interface Props {
  params: {
    id: string;
  };
}

const page: React.FC<Props> = ({ params }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [mounted]);
  if (!mounted) return null;
  return (
    <div>
      <div className="">
        <div className="p-4  dark:border-gray-700">
          <DashboardChart />
          <div className="shadow-md rounded hover:shadow-2xl px-6 py-7 transition-all duration-200 ease-in">
            <h2 className="font-bold text-lg">Recent transactions</h2>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Transaction
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TransactionTableItem
                    name="Transaction for Listing 112"
                    amount={1200}
                    date="12th May 2023"
                    status="success"
                  />
                  <TransactionTableItem
                    name="Transaction for Listing 112"
                    amount={1200}
                    date="12th May 2023"
                    status="cancelled"
                  />
                  <TransactionTableItem
                    name="Transaction for Listing 112"
                    amount={1200}
                    date="12th May 2023"
                    status="failed"
                  />
                  <TransactionTableItem
                    name="Lodger link service fee"
                    amount={20}
                    date="7th May 2023"
                    status="success"
                  />
                  <TransactionTableItem
                    name="Transaction for Listing 82"
                    amount={800}
                    date="1st May 2023"
                    status="success"
                  />
                </tbody>
              </table>
              <button className="float-right flex items-center bg-white text-black text-sm py-2 px-3 rounded-md mt-5 transform duration-100 border-blue-500 hover:border-blue-700 border-2">
                Transaction Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
