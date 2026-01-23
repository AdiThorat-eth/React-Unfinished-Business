import React from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center gap-2">
      <i className="ri-search-ai-3-fill text-3xl text-zinc-200"></i>
      <input
        className="w-1/2 p-2 text-xl outline-none border-none bg-transparent font-semibold"
        type="text"
        placeholder="Search"
        id=""
      />
      <i className="ri-close-line text-3xl text-zinc-200"></i>
      <div className="w-1/2 h-[50vh] bg-red-500 absolute top-[90%]">
        <Link className="bg-sky-500 w-full p-4 flex justify-start items-center">
          <img src="" alt="" />
          <span>Hello</span>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
