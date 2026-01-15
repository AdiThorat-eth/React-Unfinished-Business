import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-5 px-10 bg-(--c3) font-semibold capitalize flex justify-between items-center">
      <h2 className="font-semibold text-3xl"> Media search</h2>
      <div className="flex items-center gap-5 text-xl">
        <Link
          className="text-xl text-(--c1) bg-(--c4) rounded-lg px-4 py-2 active:scale-90"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-xl text-(--c1) bg-(--c4) rounded-lg px-4 py-2 active:scale-90"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
