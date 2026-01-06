import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className="w-35 px-3 py-1 text-black bg-white rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">Start a Project</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
