"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React, { useState } from "react";
import Reviews from "./Reviews";

interface ListingProp {
  id: number;
  title: string;
  description: string;
  price: string | number;
  imageUrl: string | StaticImageData;
  location: string;
  reviews: number;
  numberOfReviews: number;
}

const Listing: React.FC<ListingProp> = ({
  id,
  title,
  description,
  price,
  imageUrl,
  location,
  numberOfReviews,
  reviews,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push(`/listing/${id}`);
  };
  return (
    <div className="max-w-md w-64 mx-auto  bg-white rounded-md overflow-hidden">
      <div className="relative">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          className="h-48 w-full object-cover"
          alt={title}
        />
        {isLiked ? (
          <AiFillHeart
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 fon	 text-blue-500 hover:text-blue-500 hover:scale-150 right-4 text-2xl cursor-pointer	duration-100"
          />
        ) : (
          <AiOutlineHeart
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 fon	 text-blue-500 hover:text-blue-700 hover:scale-150 right-4 text-2xl cursor-pointer	duration-100"
          />
        )}
      </div>
      {/* <img
        className="h-48 w-full object-cover object-center"
        src={imageUrl}
        alt={title}
      /> */}
      <div className="p">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold">
            {title.length > 16 ? title.substring(0, 15) + "..." : title}
          </h2>
          <div>
            <Reviews rating={reviews} />
          </div>
        </div>
        <p className="text-gray-600 text-sm">{location}</p>
        <p className="text-gray-700 leading-5 mt-1 text-sm">
          {description.length > 30
            ? description.substring(0, 30) + "..."
            : description}
        </p>
        <div className="my-2 mx-1.5 flex justify-between items-center">
          <p className=" font-semibold text-lg">${price} / night</p>
          <button
            onClick={handleClick}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md duration-200 transform hover:scale-105 hover:bg-indigo-700 hover:shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
