import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1f1e24] flex text-white">
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
};

export default App;

// 55:11
// 2:05
