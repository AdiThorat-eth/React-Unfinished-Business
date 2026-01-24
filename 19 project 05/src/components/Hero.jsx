import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";

const Hero = () => {
  document.title = "YoYo Movies | Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

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
      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    !trending && GetTrending();
  }, []);

  console.log(trending);

  return (
    <>
      <Sidenav />
      {wallpaper && trending ? (
        <div className="w-4/5 h-full px-2 overflow-auto overflow-x-hidden">
          <Topnav />
          <Header data={wallpaper} />
          <HorizontalCards data={trending} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Hero;
