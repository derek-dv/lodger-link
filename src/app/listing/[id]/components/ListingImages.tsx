import { ListingProps } from "@/app/types/listing";
import React from "react";

interface ListingImagesProps {
  listing: ListingProps | undefined;
}

const ListingImages: React.FC<ListingImagesProps> = ({ listing }) => {
  return (
    <div className="mt-4 flex gap-3">
      <div className="flex-1 relative group cursor-pointer">
        <img
          src={`https://source.unsplash.com/random/500x500?${listing?.type}`}
          alt={listing?.title}
          className="w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity" />
      </div>
      <div className="flex-1 grid grid-cols-2 gap-2">
        <div className="relative group cursor-pointer">
          <img
            loading="lazy"
            src={`https://source.unsplash.com/random/500x500?${listing?.type} bedroom`}
            alt={listing?.title}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity" />
        </div>
        <div className="relative group cursor-pointer">
          <img
            loading="lazy"
            src={`https://source.unsplash.com/random/500x500?${listing?.type} toilet`}
            alt={listing?.title}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity" />
        </div>
        <div className="relative group cursor-pointer">
          <img
            loading="lazy"
            src={`https://source.unsplash.com/random/500x500?${listing?.type} dining`}
            alt={listing?.title}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity" />
        </div>
        <div className="relative group cursor-pointer">
          <img
            loading="lazy"
            src={`https://source.unsplash.com/random/500x500?${listing?.type} kitchen`}
            alt={listing?.title}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default ListingImages;
