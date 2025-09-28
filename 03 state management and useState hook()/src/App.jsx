import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState(12);

  return (
    <div className=" h-screen w-full">
      <h1 className="text-center text-5xl mt-5">{val}</h1>
      <div className="flex item-center justify-center mt-5 h-full w-full">
        <button
          onClick={() => {
            // setVal can also handle the function
             
            setVal((prev) => prev+1);
          }}
          className="h-15 w-30 bg-pink-200 text-2xl px-2 py-4 rounded-full"
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default App;
