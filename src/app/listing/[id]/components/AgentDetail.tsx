import React from "react";
import { AiFillSafetyCertificate, AiFillStar } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";

interface Props {
  agent: string;
  numberOfReviews: number;
}

const AgentDetail: React.FC<Props> = ({ agent, numberOfReviews }) => {
  return (
    <div>
      <div className="flex gap-3">
        <img
          src={`https://source.unsplash.com/random/50x50?avatar`}
          className="rounded-full w-16"
          alt=""
        />
        <div className="flex flex-col">
          <h3 className="font-bold">Agent {agent}</h3>
          <p className="font-light text-sm">Joined in October 2021</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <AiFillStar />
          <p>{`${numberOfReviews} reviews`}</p>
        </div>
        <div className="flex items-center gap-2">
          <MdVerifiedUser />
          <p>Identity verified</p>
        </div>
      </div>
      <div className="flex my-3 flex-wrap">
        <div className="flex-1">
          <p className="w-5/6">
            My name is {agent} and living in this town for 20 years now Passion
            for food, Travel and experiencing new exciting places and cultures.
            Since I have started hosting on Airbnb it has become my passion to
            create spaces for travelers from all around the world to enjoy and
            have a memorable stay. Looking forward to meeting you! I’ll do my
            best to make your stay comfortable and help you enjoy this awesome
            city to the fullest!
          </p>
        </div>
        <div className="flex-1">
          <p>Languages: العربية, English, Français, हिन्दी, Українська</p>
          <p>Response rate: 98%</p>
          <p>Response time: within an hour</p>
          <div className="">
            <button className="bg-white text-black py-2 px-4 rounded-md mt-5 transform duration-100 border-blue-500 hover:border-blue-700 border-2">
              Contact Agent
            </button>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <AiFillSafetyCertificate className="text-2xl font-light text-blue-700" />
            <p className="w-1/2 text-sm leading-4">
              To protect your payment, never transfer money or communicate
              outside of the website or app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
