import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/CounterReducer";

export default configureStore({
  reducer: {
    CounterReducer: CounterReducer,
  },
});
