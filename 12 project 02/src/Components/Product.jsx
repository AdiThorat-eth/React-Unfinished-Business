import React from "react";
import Button from "./Button";

const Product = ({ data, mover, index }) => {
  return (
    <div className="w-full py-20 h-[23rem]">
      <div
        onMouseEnter={() => {
          mover(index);
        }}
        className="max-w-screen-xl mx-auto flex
      justify-between items-center"
      >
        <h1 className="text-6xl font-medium">{data.title}</h1>
        <div className="detail w-1/3">
          <p className="mb-5">{data.description}</p>
          <div className="flex gap-5">
            {data.live && <Button />}
            {data.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
