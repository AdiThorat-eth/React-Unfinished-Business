import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  return trending ? (
    <div className="w-screen h-screen p-10 overflow-hidden overflow-y-auto">
      <div className="w-full flex items-center">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 cursor-pointer hover:text-[#6556CD]"
          ></i>
          Trending
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["movie", "tv", "all"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="m-2"></div>
        <Dropdown
          title="Duration"
          options={["week", "day"]}
          func={(e) => setDuration(e.target.value)}
        />
      </div>

      <Cards data={trending} title={category} />
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
