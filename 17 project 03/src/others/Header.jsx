import React from "react";

const Header = ({ data }) => {
  console.log(data);

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium ">
        Hello <br />{" "}
        <span className="text-4xl font-semibold">{data.firstName}👋</span>
      </h1>
      <button className="bg-red-500 px-5 py-2 rounded-full font-semibold text-lg">
        Log Out
      </button>
    </div>
  );
};

export default Header;
