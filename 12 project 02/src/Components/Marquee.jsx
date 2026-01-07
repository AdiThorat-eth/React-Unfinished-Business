import React from "react";

const Marquee = ({ imagesurl }) => {
  return (
    <div className="flex w-full whitespace-nowrap py-3">
      {imagesurl.map((url) => (
        <img src={url} className="m-auto w-30 flex-shrink-0" />
      ))}
    </div>
  );
};

export default Marquee;
