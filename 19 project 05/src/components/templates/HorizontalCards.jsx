import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/images/ni.webp";

const HorizontalCards = ({ data, h, h2 }) => {
  return (
    <div
      className={`w-full h-[${h2}] flex overflow-x-scroll pt-5 overflow-y-hidden`}
    >
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type || d.title}/details/${d.id}`}
            key={i}
            className="min-w-[15%] mr-5"
          >
            <img
              className={`w-full h-[${h}] object-cover`}
              src={
                d.poster_path || d.profile_path || d.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.poster_path || d.profile_path || d.backdrop_path
                    }`
                  : noimage
              }
              alt=""
            />
            <h1 className="w-full text-sm font-bold text-white tracking-[3px] text-center">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            {/* <p className="text-white text-md w-4/5 mb-5">
              {d.overview.slice(0, 200)}...
              <span className="text-blue-400"> more</span>
            </p> */}
          </Link>
        ))
      ) : (
        <h1 className="text-3xl text-center mt-5">Nothing to show</h1>
      )}
    </div>
  );
};

export default HorizontalCards;
