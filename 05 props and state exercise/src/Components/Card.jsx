import React from "react";

const Card = ({ values, index, bClicked }) => {
  const { name, musician, fav } = values;
  return (
    <div>
      <div className="relative w-60 h-30 bg-zinc-500 p-3 rounded flex gap-5">
        <div className="h-20 w-20 object-cover rounded-lg overflow-hidden">
          <img src="./public/images/chat.jpg" alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white">{name}</h1>
          <h3 className="text-lg text-white mt-1">{musician}</h3>
        </div>
        <button
          onClick={() => bClicked(index)}
          className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-1 text-md whitespace-nowrap rounded-full ${
            fav == true ? "bg-orange-400" : "bg-teal-400"
          } text-white font-bold`}
        >
          {fav == true ? "Favourite" : "Add to Favourite"}
        </button>
      </div>
    </div>
  );
};

export default Card;
// 20.12 29.12
