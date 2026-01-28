import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/images/ni.webp";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
      // console.log(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center gap-2 tracking-[1.3px] pl-[20%]">
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

      <div className="w-[40%] max-h-[50vh] absolute top-[90%] bg-zinc-300 overflow-auto rounded-lg ml-10 z-100">
        {searches &&
          searches.map((s, index) => (
            <Link
              key={index}
              className="w-full p-4 flex justify-start items-center border-b-2 border-white text-zinc-700 font-semibold hover:text-black hover:bg-zinc-100"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                src={
                  s.backdrop_path || s.profile_path || s.poster_path
                    ? `https://image.tmdb.org/t/p/original/${s.poster_path || s.profile_path || s.backdrop_path}`
                    : noimage
                }
                alt=""
              />
              <span>
                {s.name || s.title || s.original_name || s.original_title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Topnav;
