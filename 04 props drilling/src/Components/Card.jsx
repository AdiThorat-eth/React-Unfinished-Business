import React from "react";

const Card = ({ values }) => {
  const { image, name, description } = values;
  return (
    <div>
      <div className="w-42 bg-zinc-300 rounded p-2 text-center">
        <div className="h-30 w-38 bg-lime-200 rounded-lg overflow-hidden">
          <img className="h-full w-full object-cover" src={image} alt="" />
        </div>
        <h1 className="text-3xl">{name}</h1>
        <p className="text-xl">{description}</p>
        <button
          onClick={() => alert(`You added ${name} as a friend`)}
          className="px-2 py-1 bg-violet-400 rounded-full font-semibold"
        >
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default Card;
// 20.11 6.42
