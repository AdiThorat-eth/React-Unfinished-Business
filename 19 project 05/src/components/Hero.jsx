import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loading from "./Loading";

const Hero = () => {
  document.title = "YoYo Movies | Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return (
    <>
      <div className="w-full h-screen flex overflow-y-scroll">
        {wallpaper && trending ? (
          <>
            <Sidenav />
            <div className="w-4/5 h-full px-2 overflow-auto overflow-x-hidden">
              <Topnav />
              <Header data={wallpaper} />

              <div className="flex justify-between p-5">
                <h1 className="text-3xl font-semibold">Trending</h1>

                <Dropdown
                  title="Filter"
                  options={["tv", "movie", "all"]}
                  func={(e) => setCategory(e.target.value)}
                />
              </div>

              <HorizontalCards data={trending} />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Hero;
