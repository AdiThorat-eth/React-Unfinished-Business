import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import User from "../components/User";
import About from "../components/About";
import UserDetails from "../components/UserDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      {/* <Route path="/user" element={<User />} />
      <Route path="/user/:name" element={<UserDetails />} /> */}

      {/* to convert it into child route */}
      <Route path="/user" element={<User />}>
        <Route path="/user/:name" element={<UserDetails />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
// name will work as a variable dur to :
