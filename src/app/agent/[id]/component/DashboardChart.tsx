"use client";
import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const DashboardChart = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="rounded bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-2xl px-6 py-7 transition-all duration-200 ease-in hover:scale-105">
        <div className="flex justify-between">
          <p className="text-6xl font-bold">$1299</p>
          <div className="flex items-center gap-1 text-green-500">
            <p>14.5%</p>
            <AiOutlineArrowUp />
          </div>
        </div>
        <p className="text-base font-light">New transactions this week</p>
        <div className="">
          <Line
            datasetIdKey="id"
            data={{
              labels: ["Wk 1", "Wk 2", "Wk 3"],
              datasets: [
                {
                  label: "Transactions",
                  data: [500, 1003, 1299],
                },
              ],
            }}
          />
        </div>
        <button className="float-right flex items-center bg-white text-black text-sm py-2 px-3 rounded-md mt-5 transform duration-100 border-blue-500 hover:border-blue-700 border-2">
          Transactions
        </button>
      </div>
      <div className="rounded bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-2xl px-6 py-7 transition-all duration-200 ease-in hover:scale-105">
        <div className="flex justify-between">
          <p className="text-6xl font-bold">45</p>
          <div className="flex items-center gap-1 text-red-500">
            <p>9.5%</p>
            <AiOutlineArrowDown />
          </div>
        </div>
        <p className="text-base font-light">New units added this week</p>
        <div className="">
          <Line
            datasetIdKey="id"
            data={{
              labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5"],
              datasets: [
                {
                  label: "Houses",
                  data: [4, 12, 50, 100, 45],
                },
              ],
            }}
          />
        </div>
        <button className="float-right flex items-center bg-white text-black text-sm py-2 px-3 rounded-md mt-5 transform duration-100 border-blue-500 hover:border-blue-700 border-2">
          My Listings
        </button>
      </div>
      <div className="rounded bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-2xl px-6 py-7 transition-all duration-200 ease-in hover:scale-105">
        <div className="flex justify-between">
          <p className="text-6xl font-bold">90</p>
          <div className="flex items-center gap-1 text-green-500">
            <p>23.2%</p>
            <AiOutlineArrowUp />
          </div>
        </div>
        <p className="text-base font-light">Visitors this week</p>
        <div className="">
          <Line
            datasetIdKey="id"
            data={{
              labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5"],
              datasets: [
                {
                  label: "Visitors",
                  data: [4, 34, 150, 70, 90],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
