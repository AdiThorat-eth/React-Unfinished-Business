import React from "react";
import notFound from "../../public/404.gif";

const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img className="object-cover w-[220vh] h-[100vh]" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
