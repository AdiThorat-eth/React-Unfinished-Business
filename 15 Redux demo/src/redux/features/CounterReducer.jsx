import { createSlice } from "@reduxjs/toolkit";

export const CounterReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementbyAmt: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementbyAmt } = CounterReducer.actions;
export default CounterReducer.reducer;
