import React from "react";
import { FaStarHalf } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface ReviewProps {
  rating: number;
}

const Reviews: React.FC<ReviewProps> = ({ rating }) => {
  return (
    <div>
      {rating / 2 > 0 && rating / 2 < 0.5 ? (
        <>
          <FaStarHalf className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
        </>
      ) : rating / 2 >= 0.5 && rating / 2 < 1 ? (
        <>
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
        </>
      ) : rating / 2 >= 1 && rating / 2 < 1.5 ? (
        <>
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <FaStarHalf className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
        </>
      ) : rating / 2 >= 1.5 && rating / 2 < 2 ? (
        <>
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
        </>
      ) : rating / 2 >= 2 && rating / 2 < 2.5 ? (
        <>
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <FaStarHalf className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
        </>
      ) : rating / 2 >= 2.5 && rating / 2 < 3 ? (
        <>
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
        </>
      ) : rating / 2 >= 3 && rating / 2 < 3.5 ? (
        <>
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <FaStarHalf className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
        </>
      ) : rating / 2 >= 3.5 && rating / 2 < 4 ? (
        <>
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiOutlineStar className="text-sm text-amber-500 inline-block" />
        </>
      ) : rating / 2 >= 4 && rating / 2 < 4.5 ? (
        <>
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <FaStarHalf className="text-sm text-amber-500 inline-block" />
        </>
      ) : (
        <>
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
          <AiFillStar className="text-sm text-amber-500 inline-block" />
        </>
      )}
    </div>
  );
};

export default Reviews;
