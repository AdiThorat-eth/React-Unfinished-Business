import React, { useState } from "react";

const App = () => {
  const [banned, setBanned] = useState(false);

  return (
    <div className="h-screen w-full">
      {/*we cant directly write boolean in h1 so we have to convert it to String */}
      <h1 className="text-5xl text-center mt-10">{banned.toString()}</h1>
      <div className="flex justify-center item-center">
        <button
          onClick={() => {
            setBanned(!banned);
          }}
          // In this we have given a fxn to onClick which will be executed by onClick and in that fxn will set setScore
          className="px-4 py-2 bg-amber-200 mt-10 rounded-full text-3xl"
        >
          change
        </button>
      </div>
    </div>
  );
};

export default App;
