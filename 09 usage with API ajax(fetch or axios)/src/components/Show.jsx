import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Show = () => {
  // Variable names 'products' and 'setproducts' are maintained.
  const [products, setproducts] = useState([]);

  // to get products
  const getproduct = () => {
    const api = "https://fakestoreapi.com/products";
    // since it is promise we have to write ".then()"

    axios
      .get(api)
      .then((products) => {
        // FIX 1: Set state with the fetched data, which is available in products.data
        setproducts(products.data);
      })
      .catch((err) => console.log(err)); // FIX 2: Correctly log 'err' instead of 'error'
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      {/* <button onClick={getproduct} className="p-2 bg-zinc-200 m-4 rounded">
        call products api
      </button>
      <hr /> */}
      <ul className="p-4">
        {products.length > 0 ? (
          products.map((p) => (
            // FIX 4: Use 'p.id' as the key for stability.
            // Using 'index' as a fallback if 'id' is unavailable or unreliable, but 'p.id' is better.
            <li key={p.id} className="p-5 bg-red-200 rounded mb-3">
              {/* FIX 3: Display the correct property, 'title', from the API response */}
              {p.title}
            </li>
          ))
        ) : (
          <h1> Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
