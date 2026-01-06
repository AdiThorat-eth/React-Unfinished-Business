import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";

const App = () => {
  return (
    <div className="bg-zinc-900 font-Satoshi">
      <Navbar />
      <Hero />
      <Stripes />
      <Products />
    </div>
  );
};

export default App;
// product comp
