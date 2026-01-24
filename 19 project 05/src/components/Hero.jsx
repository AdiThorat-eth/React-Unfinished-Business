import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";

const Hero = () => {
  document.title = "YoYo Movies | Home";

  const [wallpaper, setWallpaper] = useState(null);
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

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return (
    <>
      <Sidenav />
      <div className="w-4/5 h-full p-2">
        <Topnav />
        {wallpaper ? <Header data={wallpaper} /> : <h1>Loading...</h1>}
      </div>
    </>
  );
};

export default Hero;
