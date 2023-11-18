import React from "react";
import Graph from "./components/Graph";
import AnimatedSelect from "./components/AnimatedSelect";
import { transactions } from "@/app/assets/transactions";
import TransactionItem from "./components/TransactionItem";

const page = ({ params }: any) => {
  return (
    <div>
      <div className="w-4/5 mx-4 mt-3 p-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-xl">
        <h2 className="font-bold text-lg mb-3">Transaction for last month</h2>
        <Graph />
        <div className="my-3">
          <select>
            <option value="">Last Week</option>
            <option value="">Last Month</option>
            <option value="">Last 3 Months</option>
          </select>
        </div>
      </div>
      <div className="mx-4 mt-4">
        <h2 className="font-bold text-lg mb-3">All Transactions</h2>
        <div className="">
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
              {transactions.map((transaction, idx) => (
                <TransactionItem
                  key={idx}
                  amount={transaction.amount}
                  date={transaction.date}
                  name={transaction.name}
                  status={transaction.status}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
