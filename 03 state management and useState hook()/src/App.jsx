import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState({ name: "Abc", isRunner: true });

  return (
    <div className="text-center text-3xl m-4">
      <h1>name: {val.name}</h1>
      {/* isRunner is boolean to use it in h1 we have to convert it into string */}
      <h2>isRunner: {val.isRunner.toString()}</h2>
      <button
        onClick={() => {
          setVal({ ...val, isRunner: !val.isRunner });
        }}
        className="px-3 py-1 bg-sky-200 rounded-full"
      >
        change
      </button>
    </div>
  );
};

export default App;
