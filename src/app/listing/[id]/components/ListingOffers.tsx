import React from "react";
import { GiElectric, GiWaterDrop } from "react-icons/gi";
import { HiWifi } from "react-icons/hi";
import { TbWashTumbleDry } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";

interface Props {
  // Define component props here
}

const ListingOffers: React.FC<Props> = ({}) => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold">Offers and Ammenities</h2>
      <div className="grid grid-cols-2 gap-3 mt-3 text-md">
        <div className="flex items-center gap-2">
          <GiElectric className="text-xl " />
          <p>Electricity</p>
        </div>
        <div className="flex items-center gap-2">
          <GiWaterDrop className="text-xl" />
          <p>Water in-premise</p>
        </div>
        <div className="flex items-center gap-2">
          <HiWifi className="text-xl" />
          <p>Fast Internet</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCarSide className="text-xl" />
          <p>Parking space</p>
        </div>
        <div className="flex items-center gap-2">
          <TbWashTumbleDry className="text-xl" />
          <p>Washer/Dryer in-uniy</p>
        </div>
      </div>
    </div>
  );
};

export default ListingOffers;
