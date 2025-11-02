import React from "react";
import axios from "axios";

const App = () => {
  // to get products
  const getproduct = () => {
    const api = "https://fakestoreapi.com/products";
    // since it is promise we have to write ".then()"

    axios
      .get(api)
      .then((products) => {
        console.log(products);
      })
      .catch((err) => console.log(error));
  };

  // to add products
  const addproduct = () => {
    const api = "https://fakestoreapi.com/products";
    // since it is promise we have to write ".then()"

    axios
      .post(api, {
        id: 0,
        title: "string",
        price: 0.1,
        description: "string",
        category: "string",
        image: "http://example.com",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(error));
  };
  return (
    <div>
      <button onClick={getproduct} className="p-2 bg-zinc-200 m-4 rounded">
        call products api
      </button>
      <button onClick={addproduct} className="p-2 bg-lime-200 m-4">
        Add product
      </button>
    </div>
  );
};

export default App;
