import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/MediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let resp = await fetchPhotos(query);
          data = resp.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }
        if (activeTab == "videos") {
          let resp = await fetchVideos(query);
          data = resp.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[1].link,
          }));
        }
        if (activeTab == "gifs") {
          let resp = await fetchGifs(query);
          data = resp.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "gif",
            thumbnail: item.images.original.mp4,
            src: item.images.original.mp4,
          }));
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    getData();
  }, [query, activeTab, dispatch]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex w-full pb-2 flex-wrap gap-2 px-10">
      {results.map((item, index) => {
        return (
          <div key={index}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
