import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductActions";

const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-center text-2xl font-bold text-red-900 mb-5">
        Products List
      </h1>
      <ul>
        {products &&
          products.map((product, index) => {
            return (
              <li key={product.id}>
                <h1>
                  {product.title}
                  <span
                    onClick={() => DeleteHandler(index)}
                    className="ml-2 text-red-500 font-black cursor-pointer"
                  >
                    X
                  </span>
                </h1>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Products;
