import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero.jsx";
import Details from "./Components/Details.jsx";

const App = () => {
  return (
    <div className="h-screen w-full flex">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;

// making categories
