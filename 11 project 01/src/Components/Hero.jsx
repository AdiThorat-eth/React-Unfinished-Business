import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/Context.jsx";
import Loading from "./Loading.jsx";

const Hero = () => {
  const { products } = useContext(ProductContext);

  return products ? (
    <>
      <Navbar />
      <div
        className="h-full w-4/5 p-5 flex flex-wrap content-start gap-2
      "
      >
        {products.map((product, index) => (
          <Link
            key={product.id}
            to={`/details/${product.id}`}
            className="card p-2 border shadow rounded w-[26vh] h-[40vh] flex justify-center items-center flex-col"
          >
            <div
              style={{
                backgroundImage: `url(${product.image})`,
              }}
              className="h-full w-full bg-contain bg-no-repeat bg-center mb-3 hover:scale-105 hover:cursor-pointer transition-all"
            ></div>
            <h1 className="hover:text-blue-500">{product.title}</h1>
          </Link>
        ))}

        {/* // */}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Hero;
