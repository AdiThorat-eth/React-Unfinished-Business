import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementbyAmt,
} from "./redux/features/CounterReducer";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.CounterReducer.value);

  const [num, setNum] = useState(5);

  return (
    <div>
      <h1 className="text-5xl m-2">{count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="px-2 py-1 rounded m-2 text-3xl bg-sky-500"
      >
        Increment by 1
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-2 py-1 rounded m-2 text-3xl bg-amber-500"
      >
        Decrement by 1
      </button>
      <input
        onChange={(e) => setNum(e.target.value)}
        value={num}
        className="bg-zinc-300 h-12 rounded m-2"
        type="number"
      />
      <button
        onClick={() => dispatch(incrementbyAmt(Number(num)))}
        className="px-2 py-1 rounded m-2 text-3xl bg-violet-500"
      >
        Increment by {num}
      </button>
    </div>
  );
};

export default App;
