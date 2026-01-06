import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="w-35 px-3 py-2 text-black bg-white rounded-full flex items-center justify-between">
      <span className="text-md font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
