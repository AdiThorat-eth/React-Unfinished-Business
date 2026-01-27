import React from "react";
import loader from "../../public/loader.gif";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img className="object-cover" src={loader} alt="" />
    </div>
  );
};

export default Loading;
