import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-1/5 h-full border-r-2 border-zinc-200 p-10">
      <h1 className="text-4xl text-center font-black mb-5">
        <i className="ri-tv-line text-[#6556cd]"></i>
        <span className="ml-1 font-CD">YoYo</span>
      </h1>

      <nav className="font-GT flex flex-col text-zinc-300 text-xl rounded-t-4xl rounded-b-4xl border-y-2 border-zinc-200 pl-5">
        <h1 className="text-2xl text-center mt-5 mb-5">New Feed</h1>
        <Link className="hover:bg-[#6556cd] hover:text-white px-2 py-1 rounded-xl transition-all duration-300">
          Trending
          <i className="ri-fire-fill ml-2"></i>
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white px-2 py-1 rounded-xl transition-all duration-300">
          Popular
          <i className="ri-arrow-up-double-line ml-2"></i>
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white px-2 py-1 rounded-xl transition-all duration-300">
          Latest
          <i className="ri-bard-fill ml-2"></i>
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white px-2 py-1 rounded-xl transition-all duration-300">
          Movies
          <i className="ri-movie-2-fill ml-2"></i>
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white px-2 py-1 rounded-xl transition-all duration-300">
          Series
          <i className="ri-tv-2-fill ml-2"></i>
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white px-2 py-1 rounded-xl transition-all duration-300 mb-5">
          People
          <i className="ri-team-fill ml-2"></i>
        </Link>
      </nav>

      <hr className="mt-5 border-none h-px bg-zinc-200" />

      <nav className="font-GT flex flex-col text-zinc-300 text-xl gap-3">
        <h1 className="text-2xl text-center mt-5">Website Info</h1>
        <Link className="hover:bg-[#6556cd] hover:text-white px-2 py-1 rounded-xl transition-all duration-300">
          About YoYo
          <i className="ri-info-i ml-2"></i>
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white px-2 py-1 rounded-xl transition-all duration-300">
          Contact us
          <i className="ri-mail-fill ml-2"></i>
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
