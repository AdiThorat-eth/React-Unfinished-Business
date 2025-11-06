import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import Services from "./components/Services";

const App = () => {
  // // to add products
  // const addproduct = () => {
  //   const api = "https://fakestoreapi.com/products";
  //   // since it is promise we have to write ".then()"

  //   axios
  //     .post(api, {
  //       id: 0,
  //       title: "string",
  //       price: 0.1,
  //       description: "string",
  //       category: "string",
  //       image: "http://example.com",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err)); // FIX 2: Correctly log 'err' instead of 'error'
  // };

  // console.log(products);
  return (
    <div>
      {/* <button onClick={addproduct} className="p-2 bg-lime-200 m-4">
        Add product
      </button>
      <hr className="my-10" /> */}
      <nav className="flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/show">show</Link>
        <Link to="/services">services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;

// 20.17 36.20 - 40.43
// 20.18 04.06 - 07.00
