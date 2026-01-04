import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] h-full m-auto p-[10%] flex items-center justify-center">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        className="h-[40vh] w-30vh] object-contain"
      />
      <div className="content flex flex-col gap-1 mt-5 pl-5">
        <h1 className="font-semibold text-4xl">
          Fjallraven - Foldsack No. 1 Backpack
        </h1>
        <h2 className="text-xl">$109.95</h2>
        <h3 className="text-lg italic">men's clothing</h3>
        <p>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className="mt-2">
          <Link className="text-lg px-2 py-2 border border-blue-900 text-blue-900 text-center rounded-lg mr-5">
            Edit
          </Link>
          <Link className="text-lg px-2 py-2 border border-red-800 text-red-800 text-center rounded-lg">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
