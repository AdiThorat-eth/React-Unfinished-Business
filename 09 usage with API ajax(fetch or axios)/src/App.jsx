import React from "react";
import axios from "axios";

const App = () => {
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
  return (
    <div>
      <button onClick={getproduct} className="p-2 bg-zinc-200 m-4 rounded">
        call products api
      </button>
    </div>
  );
};

export default App;
