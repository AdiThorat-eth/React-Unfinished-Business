import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/Context.jsx";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const { products, setProducts } = useContext(ProductContext);

  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      category.trim().length < 3 ||
      description.trim().length < 7 ||
      !image.trim() ||
      !price
    ) {
      alert("Fill all the fields");
      return;
    }

    const product = {
      id: nanoid(), // nanoid to generate unique id (npm i nanoid)
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
    // toast.success("New product is added");
    // console.log(product);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] w-[80%] h-screen m-auto flex flex-col items-center"
    >
      <h1 className="text-3xl w-1/2 mb-5 text-center uppercase font-semibold italic">
        Add Product
      </h1>
      <input
        type="text"
        placeholder="Image link"
        className="text-xl bg-zinc-100 rounded p-2 w-1/2 mb-5"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-xl bg-zinc-100 rounded p-2 w-1/2 mb-5"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category name"
          className="text-xl bg-zinc-100 rounded p-2 w-1/2 mb-5"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-xl bg-zinc-100 rounded p-2 w-1/3 mb-5"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="Add product description"
        className="text-xl bg-zinc-100 rounded p-2 w-1/2 mb-5"
        onChange={(e) => setdescription(e.target.value)}
        rows="10"
        value={description}
      ></textarea>
      <button className="py-3 px-5 border text-center border-blue-400 text-blue-400 rounded-lg mb-4 hover:bg-blue-400 hover:text-white transition-all w-1/2 mt-10">
        Add new product
      </button>
    </form>
  );
};

export default Create;
