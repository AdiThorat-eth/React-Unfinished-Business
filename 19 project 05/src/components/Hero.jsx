import React from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";

const Hero = () => {
  document.title = "YoYo Movies | Home";
  return (
    <>
      <Sidenav />
      <div className="w-4/5 h-full p-2">
        <Topnav />
      </div>
    </>
  );
};

export default Hero;
