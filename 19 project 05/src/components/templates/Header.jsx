import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  //   console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.9)),
         url(https://image.tmdb.org/t/p/original/${
           data.poster_path || data.profile_path || data.backdrop_path
         })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full h-[50vh] m-auto rounded-2xl flex flex-col justify-end p-5 items-start"
    >
      <h1 className="w-4/5 text-5xl font-bold text-white tracking-[3px]"></h1>
      <p className="text-white text-md w-4/5 mb-5">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400"> more</Link>
      </p>
      <p className="">
        <i className="ri-megaphone-fill mr-2 text-yellow-500"></i>
        {data.release_date || "No info"}
        <i className="ri-album-fill ml-4 mr-2 text-yellow-500"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="p-2 mt-5 bg-[#6556cd] rounded-xl font-semibold">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
