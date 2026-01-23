import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center gap-2 tracking-[1.3px] ml-[20%]">
      <i className="ri-search-ai-3-fill text-3xl text-zinc-200"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-1/2 p-2 text-xl outline-none border-none bg-transparent font-extralight"
        type="text"
        placeholder="Search"
        id=""
      />
      {query.length > 0 && (
        <ix
          onClick={() => setQuery("")}
          className="ri-close-line text-3xl text-zinc-200"
        ></ix>
      )}

      <div className="w-1/2 max-h-[50vh] absolute top-[90%] bg-zinc-300 overflow-auto rounded-lg">
        {/* <Link className="w-full p-4 flex justify-start items-center border-b-2 border-white text-zinc-700 font-semibold hover:text-black hover:bg-zinc-100">
          <img src="" alt="" />
          <span>Hello</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
