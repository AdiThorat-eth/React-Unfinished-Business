import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";

import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = "YoYo Movies | People " + category.toUpperCase();

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      // setpeople(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler = async () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setPage(1);
      setPeople([]);
      GetPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className="w-screen min-h-screen p-10 bg-[#1f1e24]">
      <div className="w-full flex items-center">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 cursor-pointer hover:text-[#6556CD]"
          ></i>
          People
        </h1>
        <Topnav />
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={people} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
