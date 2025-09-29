import React from "react";

const Card = ({ yohoho, color }) => {
  return (
    <div className="text-center m-5">
      <button className={`px-5 py-2 ${color} rounded-full text-sm`}>
        {yohoho}
      </button>
    </div>
  );
};

export default Card;
