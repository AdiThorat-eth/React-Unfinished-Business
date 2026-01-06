import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/Context.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const navigate = useNavigate();

  const { products, setProducts } = useContext(ProductContext);

  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  //   const [image, setimage] = useState("");
  //   const [title, settitle] = useState("");
  //   const [category, setcategory] = useState("");
  //   const [price, setprice] = useState("");
  //   const [description, setdescription] = useState("");

  useEffect(() => {
    // Fix: Find the product and populate the local state for editing
    const currentProduct = products.find((p) => p.id == id);
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [id, products]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.category.trim().length < 3 ||
      product.description.trim().length < 7 ||
      product.image.trim().length < 1 ||
      product.price.trim().length < 1
    ) {
      alert("Fill all the fields");
      return;
    }

    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];

    copyData[pi] = { ...products[pi], ...product };

    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    toast.success("Product edited successfully");
    navigate(-1);

    // const product = {
    //   id: nanoid(), // nanoid to generate unique id (npm i nanoid)
    //   title,
    //   image,
    //   category,
    //   price,
    //   description,
    // };

    // setProducts([...products, product]);
    // localStorage.setItem("products", JSON.stringify([...products, product]));
    // navigate("/");
    // toast.success("New product is added");
    // console.log(product);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] w-[80%] h-screen m-auto flex flex-col items-center"
    >
      <h1 className="text-3xl w-1/2 mb-5 text-center uppercase font-semibold italic">
        Edit Product
      </h1>
      <input
        type="text"
        name="image"
        placeholder="Image link"
        className="text-xl bg-zinc-100 rounded p-2 w-1/2 mb-5"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-xl bg-zinc-100 rounded p-2 w-1/2 mb-5"
        onChange={changeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          name="category"
          placeholder="Category name"
          className="text-xl bg-zinc-100 rounded p-2 w-1/2 mb-5"
          onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="text-xl bg-zinc-100 rounded p-2 w-1/3 mb-5"
          onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        name="description"
        placeholder="Add product description"
        className="text-xl bg-zinc-100 rounded p-2 w-1/2 mb-5"
        onChange={changeHandler}
        rows="10"
        value={product && product.description}
      ></textarea>
      <button className="py-3 px-5 border text-center border-blue-400 text-blue-400 rounded-lg mb-4 hover:bg-blue-400 hover:text-white transition-all w-1/2 mt-10">
        Edit the product
      </button>
    </form>
  );
};

export default Edit;
