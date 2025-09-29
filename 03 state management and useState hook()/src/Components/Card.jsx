import React, { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const Card = () => {
  const [val, setVal] = useState(false);

  return (
    <div className="h-screen w-full bg-zinc-300 flex justify-center items-center">
      <div className="relative h-32 w-60 rounded-lg bg-lime-200 overflow-hidden flex">
        <img
          className={`w-full h-full object-cover shrink-0 transition-transform duration-300 ease-in-out ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
          src="https://images.unsplash.com/photo-1758621518225-9248e65dbaee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`w-full h-full object-cover shrink-0 transition-transform duration-300  ease-in-out ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
          src="https://images.unsplash.com/photo-1758645839267-6fa279bde18f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="text-2xl absolute -bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500/80"
        >
          <FaCircleArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Card;
