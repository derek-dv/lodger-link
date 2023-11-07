import { ListingProps } from "@/app/types/listing";
import _reviews from "@/app/assets/reviews.json";
import ReviewType from "@/app/types/review";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Review } from "./Review";

interface Props {
  listing: ListingProps | undefined;
}

const getReviews: () => ReviewType[] = () => {
  let reviews: ReviewType[] = _reviews.reviews;
  reviews = reviews.sort(() => 0.5 - Math.random());
  return reviews.slice(0, 6);
};

const ListingReviews: React.FC<Props> = ({ listing }) => {
  const reviews = getReviews();

  return (
    <div>
      <div className="font-medium text-xl flex items-center gap-3">
        <div className="flex items-center gap-3">
          <AiFillStar />
          <p>{listing!.review / 2}</p>
          <p>·</p>
        </div>
        <div className="">
          <p>{listing?.number_of_reviews} reviews</p>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-3 mt-3 text-md">
          {reviews.map((review) => (
            <Review review={review} />
          ))}
        </div>
      </div>
      <button className="bg-white text-black py-2 px-4 rounded-md mt-5 transform duration-100 border-blue-500 hover:border-blue-700 border-2">
        Load More Reviews
      </button>
    </div>
  );
};

export default ListingReviews;
