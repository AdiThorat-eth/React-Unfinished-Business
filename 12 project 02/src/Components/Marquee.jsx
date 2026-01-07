import React from "react";

const Marquee = ({ imagesurl }) => {
  return (
    <div className="flex w-full whitespace-nowrap py-6">
      {imagesurl.map((url) => (
        <img
          src={url}
          className="m-auto w-30 flex-shrink-0 object-contain h-12"
        />
      ))}
    </div>
  );
};

export default Marquee;
