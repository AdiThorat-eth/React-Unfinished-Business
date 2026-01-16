import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./features/SearchSlice";
import CollectionSlice from "./features/CollectionSlice";

export default configureStore({
  reducer: {
    search: SearchSlice,
    collection: CollectionSlice,
  },
});
