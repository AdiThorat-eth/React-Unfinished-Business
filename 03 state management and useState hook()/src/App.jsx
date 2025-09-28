import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="p-2 text-center">
      {val.map((item) => (
        <h1>{item}</h1>
      ))}
      <button
        onClick={() => setVal(() => val.filter((item, idx) => idx != 2))}
        className="px-5 py-2 bg-blue-200 rounded-full"
      >
        Click
      </button>
    </div>
  );
};

export default App;
