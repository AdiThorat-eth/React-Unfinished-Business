import React from "react";
import axios from "axios";
import { getproducts } from "../reducers/ProductReducer";

// export const asyncgetproducts = async () => {

// here normal fxn is wrap within another fxn("() =>") bcoz for async action for it is required to create async fxn inside the fxn
export const asyncgetproducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    // here is data of products that is sync data
    dispatch(getproducts(response.data));
  } catch (error) {
    console.log(error);
  }
};

// function a() {
//   return function() {}
// }

// () => () => {}
