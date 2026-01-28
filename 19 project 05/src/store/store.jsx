import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./reducers/MovieSlice";
import TvSlice from "./reducers/TvSlice";
import PeopleSlice from "./reducers/PeopleSlice";

export const store = configureStore({
  reducer: {
    movie: MovieSlice,
    tv: TvSlice,
    people: PeopleSlice,
  },
});
