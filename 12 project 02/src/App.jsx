import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-zinc-900 font-Satoshi">
      <Navbar />
      <Hero />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
// 20.21-01.13.38
