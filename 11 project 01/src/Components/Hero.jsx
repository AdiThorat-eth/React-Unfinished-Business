import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-full w-4/5 p-5 flex flex-wrap content-start gap-2.5
      "
      >
        <Link
          to="/details/1"
          className="card p-2 border shadow rounded w-[26vh] h-[40vh] flex justify-center items-center flex-col"
        >
          <div
            style={{
              backgroundImage:
                "url('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png')",
            }}
            className="h-full w-full bg-cover bg-center mb-3 hover:scale-105 hover:cursor-pointer transition-all"
          ></div>
          <h1 className="hover:text-blue-500">Hello</h1>
        </Link>

        {/* // */}
      </div>
    </>
  );
};

export default Hero;
