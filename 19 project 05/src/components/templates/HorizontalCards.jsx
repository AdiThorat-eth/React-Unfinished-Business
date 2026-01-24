import React from "react";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[40vh] p-5">
      <div className="mb-2">
        <h1 className="text-3xl font-semibold">Trending</h1>
      </div>

      <div className="w-full flex overflow-x-scroll">
        {data.map((d, i) => (
          <div key={i} className="min-w-[15%] mr-5 bg-amber-500">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                d.poster_path || d.profile_path || d.backdrop_path
              }`}
              alt=""
            />
            <h1 className="w-full text-md font-bold text-white tracking-[3px] text-center">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            {/* <p className="text-white text-md w-4/5 mb-5">
              {d.overview.slice(0, 200)}...
              <span className="text-blue-400"> more</span>
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
