import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./features/SearchSlice";

export default configureStore({
  reducer: {
    search: SearchSlice,
  },
});
