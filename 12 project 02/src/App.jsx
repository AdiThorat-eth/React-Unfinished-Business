import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stripes from "./Components/Stripes";

const App = () => {
  return (
    <div className="bg-zinc-900 font-Satoshi">
      <Navbar />
      <Hero />
      <Stripes />
    </div>
  );
};

export default App;
// stripe component
