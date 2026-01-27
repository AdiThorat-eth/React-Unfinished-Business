import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tv from "./components/Tv";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1f1e24] flex text-white">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
      </Routes>
    </div>
  );
};

export default App;

// 55:11
// 2:05
// 24.2 12:59
