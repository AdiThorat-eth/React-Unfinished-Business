import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "./store/reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-center text-3xl font-bold text-red-900">
        Counter: {value}
      </h1>
      <div className="text-center mt-5">
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="border rounded bg-sky-200 py-1 px-2 border border-black m-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="border rounded bg-sky-200 py-1 px-2 border border-black m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          // increment with delay using Async fxn
          // onClick={() => dispatch(incrementAsync(5))}
          className="border rounded bg-sky-200 py-1 px-2 border border-black m-2"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default App;
