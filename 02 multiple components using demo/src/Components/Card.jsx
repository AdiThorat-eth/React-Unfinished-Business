import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mantra Care",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit a99 fcuk ya!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1758550445758-165aeab5b26e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      name: "Lights",
      description: "Lorem ipsum dolor sit amet consectetur elit. Quas, porro!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1755024324097-64832c4d2334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      name: "Planet",
      description:
        "Lorem dolor sit amet consectetur adipisicing elit. Quas, porro!",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      {data.map((elem, idx) => (
        <div key={idx} className="w-56 px-3 py-4 bg-zinc-100 rounded-lg overflow-hidden">
          <div className="w-50 h-32 bg-zinc-300 rounded-lg overflow-hidden">
            <img
              src={elem.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full px-3 py-4"></div>
          <h2 className="text-center font-semibold">{elem.name}</h2>
          <p>
           {elem.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
