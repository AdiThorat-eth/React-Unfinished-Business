import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full gap-2">
      {data.map((c, i) => (
        <Link className="w-[25vh] mx-auto mb-5" key={i}>
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.profile_path || c.backdrop_path
            }`}
            alt=""
          />
          <h1 className="text-xl text-zinc-200 font-semibold text-center">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
