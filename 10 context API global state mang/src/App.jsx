import React from "react";
import Hero from "./Components/Hero";
import User from "./Components/User";
import About from "./Components/About";
import UserDetails from "./Components/UserDetails";
import { Link, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="m-auto w-1/2">
      <nav className="mt-5 flex justify-center gap-10 text-center">
        <Link to="/">Hero</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;

// 20.19 - 05.25
