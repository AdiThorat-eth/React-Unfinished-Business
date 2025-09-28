import React from "react";

const Card = () => {
  const data = [
    {
      name: "I Will Survive",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum sapiente",
    },
    {
      name: "Diamonds",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit sapiente",
    },
    {
      name: "Washing Machine Heart",
      description:
        "Lorem ipsum dolor sit amet consectetur. Yohohohoho zihahahaha",
    },
  ];

  const onMouseClick = () => {
    alert("Hey Hey you are pirating");
  };

  // handling events
  // in arrow fxn () for implecite return (() => ())
  // in arrow fxn {} for using function

  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center flex-row">
      {data.map((elem, idx) => (
        <div key={idx} className="song w-60 px-3 py-2 bg-sky-100 rounded">
          <h3 className="font-semibold text-xl text-center">{elem.name}</h3>
          <p className="text-sm mt-2">{elem.description}</p>
          <button
            onClick={onMouseClick}
            className="bg-violet-200 px-2 py-1 rounded-full mt-2 ml-15 text-xs font-semibold cursor-pointer"
          >
            Play Now!
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
