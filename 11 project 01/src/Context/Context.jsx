import React, { createContext, useState, useEffect } from "react";
import axios from "./axios.jsx";

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  // const getproducts = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     setProducts(data);
  //     localStorage.setItem("products", JSON.stringify(data));
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };

  // useEffect(() => {
  //   getproducts();
  // }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
