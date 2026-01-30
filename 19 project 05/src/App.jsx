import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tv from "./components/Tv";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PeopleDetails from "./components/PeopleDetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1f1e24] flex text-white">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<TvDetails />} />

        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<PeopleDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

// 55:11
// 2:05
// 24.2 12:59
// 24.3 0:0
// 24.3 1:19:41
// 24.3 2:15:32
//
