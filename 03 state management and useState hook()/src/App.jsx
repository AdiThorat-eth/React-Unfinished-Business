import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState({ name: "Abc", isRunner: true, marks: 11 });

  return (
    <div className="text-center text-3xl m-4">
      <h1>name: {val.name}</h1>
      {/* isRunner is boolean to use it in h1 we have to convert it into string */}
      <h2>isRunner: {val.isRunner.toString()}</h2>
      <h3>Marks: {val.marks}</h3>
      <button
        onClick={() => {
          setVal({ ...val, marks: val.marks + 1, isRunner: !val.isRunner });
        }}
        className={`px-3 py-1 ${
          val.isRunner ? "bg-sky-300" : "bg-red-300"
        } rounded-full`}
      >
        change
      </button>
    </div>
  );
};

export default App;
