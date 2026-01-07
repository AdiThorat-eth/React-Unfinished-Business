import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ width = "w-[30%]", start, end, heading, data, hover }) => {
  return (
    <div
      className={`${width} bg-zinc-800 p-5 rounded-xl relative ${hover} group`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{data.title}</h3>
          <FaArrowRightLong className="font-sm" />
        </div>
        <h1 className="text-3xl font-medium mt-6">{data.point}</h1>
        <div className="w-full mt-25">
          {heading && (
            <h1 className="text-9xl font-semibold tracking-tight leading-none mb-16">
              Start
            </h1>
          )}
          {start && (
            <button
              className={
                "bg-zinc-800 px-3 py-2 rounded-full border border-white mt-4 absolute bottom-5 group-hover:bg-transparent"
              }
            >
              Contact us
            </button>
          )}
          {end && (
            <p className="text-sm text-zinc-400 font-medium absolute bottom-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
