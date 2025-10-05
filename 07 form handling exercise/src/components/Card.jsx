import React from "react";

const Card = ({ user, handleRemove, id }) => {
  return (
    <div className="w-[15vw] h-full bg-rose-200 rounded-lg flex flex-col items-center p-2 text-center">
      <div className="image w-[5vw] h-[5vw] rounded-full bg-blue-800 overflow-hidden">
        <img className="h-full w-full object-cover" src={user.img} alt="" />
      </div>
      <h1 className="text-[4vh] font-semibold mt-1">{user.name}</h1>
      <h4 className="opacity-50 text-[3vh] font-semibold">{user.stand}</h4>
      <p className="text-[2vh] font-semibold tracking-tight mt-1">
        Star Platinum Za Warudo!! <br />
        ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA!!
      </p>
      <button
        onClick={() => handleRemove(id)}
        className="px-2 py-0.5 bg-zinc-200 uppercase rounded-full mt-1 text-[2vh] font-bold pt-1 whitespace-nowrap"
      >
        Remove it
      </button>
    </div>
  );
};

export default Card;
