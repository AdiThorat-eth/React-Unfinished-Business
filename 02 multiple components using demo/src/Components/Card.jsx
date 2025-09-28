import React from "react";

const Card = () => {
  return (
    <div className="w-full h-screen bg-zinc-200">
      <div className="w-56 px-3 py-4 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden">
      <div className="w-50 h-32 bg-zinc-300 rounded-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
        className="w-full h-full object-cover" />
      </div>
      <div className="w-full px-3 py-4"></div>
      <h2 className="text-center font-semibold">Mantra Care</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, porro!</p>
      </div>
    </div>
  );
};

export default Card;
