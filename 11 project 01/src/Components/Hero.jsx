import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Context/Context.jsx";
import Loading from "./Loading.jsx";
import axios from "../Context/axios.jsx";

const Hero = () => {
  const { products } = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // decodeURIComponent is used to convert data which is present is params to normal string

  const [filteredProducts, setfilteredProducts] = useState(products);

  const getproductsCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);
    if (category != "undefined") getproductsCategory();
  }, [category, products]);

  // console.log(filteredProducts);
  return products ? (
    <>
      <Navbar />
      <div
        className="h-full w-4/5 p-5 flex flex-wrap content-start gap-2
      "
      >
        {filteredProducts &&
          filteredProducts.map((product, index) => (
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
