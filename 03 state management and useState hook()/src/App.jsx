import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState([
    { name: "Abc", age: 99 },
    { name: "Ghi", age: 50 },
    { name: "Xyz", age: 101 },
  ]);
  return (
    <div className="p-2 text-center">
      {val.map((item) => (
        <div>
          <h1>Name: {item.name}</h1>
          <h2>Age: {item.age}</h2>
        </div>
      ))}
      <button
        onClick={() =>
          setVal(() =>
            val.map((item) =>
              item.name === "Ghi" ? { name: "Ghi", age: 26 } : item
            )
          )
        }
        className="px-5 py-2 bg-blue-200 rounded-full"
      >
        Click
      </button>
    </div>
  );
};
// 20.9-28.28
export default App;
