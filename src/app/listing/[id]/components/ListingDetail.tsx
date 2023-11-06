import { useRouter } from "next/router";
import React from "react";
import { BiBed } from "react-icons/bi";
import { FaToilet } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import ListingOffers from "./ListingOffers";
import { ListingProps } from "@/app/types/listing";

interface ListingDetailProps {
  listing: ListingProps | undefined;
}

const ListingDetail: React.FC<ListingDetailProps> = ({ listing }) => {
  return (
    <div className="flex-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-medium text-xl">
            Whole unit sold by {listing?.owner}{" "}
          </p>
          <div className="mt-0 flex text-base font-light gap-3">
            <div className="flex items-center gap-1">
              <BiBed />
              <p>{`${listing?.bedrooms} bedrooms`}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaToilet />
              <p>{`${listing?.toilets} toilets`}</p>
            </div>
            <div className="flex items-center gap-1">
              <MdEventSeat />
              <p>{`1 living room`}</p>
            </div>
          </div>
        </div>

        <img
          src="https://source.unsplash.com/random/100x100?avatar"
          className="rounded-full w-20"
          alt=""
        />
      </div>
      <hr className="my-4 shadow-md" />
      <div className="">
        <p className="text-lg font-semibold">Description</p>
        <p className="text-sm leading-7">{listing?.description}</p>
      </div>
      <hr className="my-4 shadow-md" />
      <div className="">
        <ListingOffers />
      </div>
    </div>
  );
};

export default ListingDetail;
