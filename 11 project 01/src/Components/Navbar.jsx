import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Context/axios.jsx";
import { ProductContext } from "../Context/Context.jsx";

const Navbar = () => {
  const { products } = useContext(ProductContext);

  let uniqueCategories =
    products && products.reduce((acc, curr) => [...acc, curr.category], []);

  uniqueCategories = [...new Set(uniqueCategories)];
  // Set is collection of unique values

  const color = () => {
    return `rgba(
    ${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},
    0.4)`;
  };

  return (
    <nav className="w-1/5 h-full bg-zinc-50 p-4 flex flex-col items-center">
      <a
        className="py-3 px-5 border text-center border-blue-400 text-blue-400 rounded-lg mb-4 hover:bg-blue-400 hover:text-white transition-all w-full"
        href="/create"
      >
        Add new product
      </a>
      <hr className="w-full" />
      <h1 className="text-lg font-semibold w-[88%] my-2">Category Filter</h1>
      <div className="w-[75%]">
        {uniqueCategories.map((category, index) => (
          <Link
            key={category.id}
            to={`/?category=${category}`}
            className="my-1 flex items-center gap-2 p-2 rounded-lg hover:bg-blue-100 transition-all w-full block text-lg"
          >
            <span
              style={{ backgroundColor: color() }}
              className="mr-2 w-[15px] h-[15px] rounded-full"
            ></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
