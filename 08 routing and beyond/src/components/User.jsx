import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl mb-4">User</h1>
      {/* <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores itaque
        fugit rem?
      </p> */}

      <div className="flex gap-2 mb-4 flex-col items-center">
        <Link
          to="/user/abc"
          className="px-16 py-2 bg-red-300 rounded-full text-xl hover:bg-violet-200"
        >
          Abc
        </Link>
        <Link
          to="/user/def"
          className="px-16 py-2 bg-red-300 rounded-full text-xl hover:bg-violet-200"
        >
          Def
        </Link>
        <Link
          to="/user/ghi"
          className="px-16 py-2 bg-red-300 rounded-full text-xl hover:bg-violet-200"
        >
          Ghi
        </Link>
      </div>

      <button className="px-4 py-2 bg-lime-300 rounded-full"> YO </button>
    </div>
  );
};

export default User;
