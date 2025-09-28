import React, { useState } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  setScore(150);

  return (
    <div className="h-screen w-full">
      <h1 className="text-5xl text-center mt-10">{score}</h1>
      <div className="flex justify-center item-center">
        <button 
        onClick={setScore}
        // we have to write setScore() but duw to bracker "()" it will execute immediately but we want it to execute onClick but if we just write setScore then it is not fxn so declare setScore before return() and then write setScore in onClick 
        className="px-4 py-2 bg-amber-200 mt-10 rounded-full text-3xl">change</button>
      </div>
    </div>
  );
};

export default App;
