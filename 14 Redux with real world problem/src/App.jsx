import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Users from "./Components/Users";
import Products from "./Components/Products";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <nav className="py-5 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
//