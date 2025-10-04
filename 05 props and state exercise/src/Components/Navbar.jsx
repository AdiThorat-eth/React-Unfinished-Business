import React from "react";

const Navbar = ({ values }) => {
  return (
    <nav className="w-full py-5 px-20 flex justify-between items-center">
      <div className="text-3xl text-orange-600 font-bold">Orange</div>
      <div className="px-3 py-1 bg-orange-600 rounded-full text-lg text-white font-semibold flex">
        <h3>Favourites &nbsp;</h3>
        <h4>{values?.filter(item => item.fav).length}</h4>
      </div>
    </nav>
  ); 
};

export default Navbar;
 