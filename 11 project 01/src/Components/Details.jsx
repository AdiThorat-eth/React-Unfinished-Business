import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "../Context/axios.jsx";
import Loading from "./Loading.jsx";
import { ProductContext } from "../Context/Context.jsx";
const Details = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };

  useEffect(() => {
    if (products) {
      // Technical Fix: Match the specific id from the URL params
      const singleProduct = products.find((p) => p.id == id);
      setProduct(singleProduct);
    }
  }, [id, products]);

  const ProductDeleteHandler = (id) => {
    // 1. Create the new list excluding the deleted item
    const updatedProductsList = products.filter((p) => p.id !== id);

    // 2. Update the Context state so the change reflects everywhere
    setProducts(updatedProductsList);

    // 3. Update local storage to persist the deletion
    localStorage.setItem("products", JSON.stringify(updatedProductsList));

    // 4. Navigate back to Home
    navigate("/");
  };

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
              <Link
                to={`/edit/${product.id}`}
                className="text-lg px-2 py-2 border border-blue-900 text-blue-900 text-center rounded-lg mr-5"
              >
                Edit
              </Link>
              <button
                onClick={() => ProductDeleteHandler(product.id)}
                className="text-lg px-2 py-2 border border-red-800 text-red-800 text-center rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Details;
