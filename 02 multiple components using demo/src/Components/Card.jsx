import React from "react";

const Card = () => {
  const data = ["abc", "def", "ghi"];
  return (
    <div>
      {data.map((elem, idx) => (
        // to get unique key for each element we need to use key prop
        <div key={idx} className="px-3 py-4 bg-zinc-300 rounded-lg w-fit">
          {elem}
        </div>
      ))}
    </div>
  );
};

export default Card;
