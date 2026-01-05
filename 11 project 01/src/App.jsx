import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Hero from "./Components/Hero.jsx";
import Details from "./Components/Details.jsx";

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-full flex">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="text-white absolute bg-blue-400 m-4 px-2 py-1 text-2xl rounded  hover:bg-white hover:text-blue-400 border border-blue-400 transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;

// organizing categories
