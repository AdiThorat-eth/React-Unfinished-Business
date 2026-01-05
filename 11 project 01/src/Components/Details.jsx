import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Context/axios.jsx";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <div className="w-[70%] h-full m-auto p-[10%] flex items-center justify-center">
      {product ? (
        <>
          <img
            src={product.image}
            className="h-[40vh] w-[30vh] object-contain"
          />
          <div className="content flex flex-col gap-1 mt-5 pl-5">
            <h1 className="font-semibold text-4xl">{product.title}</h1>
            <h2 className="text-xl">${product.price}</h2>
            <h3 className="text-lg italic">{product.category}</h3>
            <p>{product.description}</p>
            <div className="mt-2">
              <Link className="text-lg px-2 py-2 border border-blue-900 text-blue-900 text-center rounded-lg mr-5">
                Edit
              </Link>
              <Link className="text-lg px-2 py-2 border border-red-800 text-red-800 text-center rounded-lg">
                Delete
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Details;
