import Review from "@/app/types/review";
import React from "react";

interface Props {
  review: Review;
}
export const Review: React.FC<Props> = ({ review }) => {
  return (
    <div>
      <div className="flex gap-3">
        <img
          src={`https://source.unsplash.com/random/50x50?avatar${review.date}`}
          className="rounded-full w-12"
          alt=""
        />
        <div className="flex flex-col">
          <h3 className="font-bold">{review.reviewer_name}</h3>
          <p className="font-light text-sm">{review.date}</p>
        </div>
      </div>
      <div className="my-3 w-5/6">
        <p className="leading-5">{review.review}</p>
      </div>
    </div>
  );
};
