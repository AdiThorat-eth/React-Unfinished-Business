import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import User from "../components/User";
import About from "../components/About";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/user" element={<User />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
