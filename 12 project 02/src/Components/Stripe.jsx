import React from "react";

const Stripe = ({ value }) => {
  return (
    <div className="w-1/6 h-14 px-5 py-3 border border-zinc-600 flex justify-between items-center">
      <img className="object-contain" src={value.url} alt="" />
      <span>{value.number}</span>
    </div>
  );
};

export default Stripe;
