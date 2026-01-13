import React from "react";
import { fetchGif, fetchPhotos, fetchVideos } from "./api/MediaApi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button
        onClick={async () => {
          const data = await fetchPhotos("cat");
          console.log(data.results);
        }}
        className="px-2 py-1 bg-sky-500 text-2xl rounded-lg m-10"
      >
        Get photos
      </button>

      <button
        onClick={async () => {
          const data = await fetchVideos("cat");
          console.log(data.videos);
        }}
        className="px-2 py-1 bg-violet-500 text-2xl rounded-lg m-10"
      >
        Get Videos
      </button>

      <button
        onClick={async () => {
          const data = await fetchGif("cat");
          console.log(data.data);
        }}
        className="px-2 py-1 bg-amber-500 text-2xl rounded-lg m-10"
      >
        Get Gifs
      </button>
    </div>
  );
};

export default App;
