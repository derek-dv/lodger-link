"use client";
import { ListingProps } from "@/app/types/listing";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import DatePicker, { DateValueType } from "react-tailwindcss-datepicker";

interface BookingFormProps {
  listing: ListingProps | undefined;
}

function differenceInMonths(date1: Date, date2: Date) {
  const monthsDiff =
    (date2.getFullYear() - date1.getFullYear()) * 12 +
    (date2.getMonth() - date1.getMonth());
  return Math.abs(Math.ceil(monthsDiff));
}

const MyComponent: React.FC<BookingFormProps> = ({ listing }) => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
  });

  const [month, setMonth] = useState<number>(0);

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    const diff = differenceInMonths(
      new Date(newValue?.endDate + ""),
      new Date(newValue?.startDate + "")
    );
    setMonth(diff);
    setValue(newValue);
  };

  return (
    <div className="w-96 border-2 shadow-md rounded px-3 py-4 mb-4">
      <div className="flex justify-between text-sm">
        <p className="text-xl font-bold">
          ${listing?.price} <span className="text-sm font-normal">Month</span>
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <AiFillStar />
            <p>{listing!.review / 2}</p>
          </div>
          <p>{listing?.number_of_reviews} reviews</p>
        </div>
      </div>
      <div className="mt-4">
        <DatePicker
          onChange={handleValueChange}
          value={value}
          primaryColor="blue"
          minDate={new Date()}
          separator="to"
          showFooter={true}
        />
      </div>
      <div className="">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5 transform duration-100">
          Book Now
        </button>
        <p className="mt-3 text-center text-sm">
          The real estate agent would be contacted
        </p>
      </div>
      <div className="mt-5 text-sm flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p>{`${listing?.price} x ${month} months`}</p>
          <p>{`$${listing!.price * month}`}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>{`10% realtor fee`}</p>
          <p>{`$${listing!.price * month * 0.1}`}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Lodger link service fee</p>
          <p>{`$20`}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-xl flex items-center justify-between">
        <p className="font-bold">Total</p>
        <p className="font-bold">{`$${
          listing!.price * month * 0.1 + 20 + listing!.price * month
        }`}</p>
      </div>
    </div>
  );
};

export default MyComponent;
