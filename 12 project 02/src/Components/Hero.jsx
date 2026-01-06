import React from "react";

const Hero = () => {
  var images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];

  return (
    <div className="w-full text-center mt-24">
      <div className="max-w-screen-xl mx-auto relative">
        <h1 className="text-[50vh] font-medium leading-none tracking-tight select-none">
          Work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="w-60 rounded-lg absolute -translate-x-1/2"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                />
              )
          )}
        </div>
      </div>
      <div className="bg-red-200 h-20 w-full absolute bottom-0"></div>
    </div>
  );
};

export default Hero;
