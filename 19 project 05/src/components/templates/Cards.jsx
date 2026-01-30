import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/images/ni.webp";

const Cards = ({ data, title }) => {
  return (
    <div className=" flex flex-wrap w-full gap-2 bg-[#1f1e24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title.toLowerCase()}/details/${c.id}`}
          className="relative w-[25vh] mx-auto mb-5"
          key={i}
        >
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
            src={
              c.poster_path || c.profile_path || c.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.profile_path || c.backdrop_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-xl text-zinc-200 font-semibold text-center">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="absolute -right-2 top-[5%] rounded-full text-lg font-semibold bg-yellow-500 w-[6vh] h-[6vh] justify-center items-center text-center pt-2">
              {c.vote_average.toFixed(1)}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
