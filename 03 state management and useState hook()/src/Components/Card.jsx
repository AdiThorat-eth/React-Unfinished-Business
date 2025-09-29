import React, { useState } from "react";

const Card = () => {
  const [val, setVal] = useState(false);
  return (
    <div className="text-center">
      {/* print "go outside" if val is false and print "dont go" if val is true */}
      <h1 className="text-center m-5">
        {val === false ? "go outside" : "dont go"}
      </h1>

      <button
        // onClick={() => {setVal(!val)}}
        // it is not good practice

        onClick={() => setVal(() => !val)}
        // this is coorect way
        className="px-5 py-2 bg-yellow-300 rounded-full"
      >
        Change
      </button>
    </div>
  );
};

export default Card;
