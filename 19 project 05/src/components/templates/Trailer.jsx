import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVid = useSelector((state) => state[category].info.videos);

  console.log("Video object:", ytVid);
  console.log("Video key:", ytVid?.key);

  const videoKey = ytVid?.key;
  const videoUrl = videoKey
    ? `https://www.youtube.com/watch?v=${videoKey}`
    : null;

  return (
    <div className="absolute w-full h-[135vh] bg-[rgba(0,0,0,0.95)] top-0 left-0 flex justify-center z-50">
      <i
        onClick={() => navigate(-1)}
        className="ri-close-line text-white text-5xl absolute top-10 right-10 cursor-pointer hover:text-[#6556CD] z-[60] fixed"
      ></i>
      {ytVid ? (
        <div className="fixed w-full h-full flex flex-col items-center justify-center p-10">
          {videoKey ? (
            <div className="w-full max-w-7xl h-[80%] flex flex-col items-center">
              {/* YouTube iframe embed - most reliable method */}
              <iframe
                width="80%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-2xl"
              ></iframe>

              {/* Fallback link */}
              <div className="absolute  bottom-5 text-white text-center">
                <p className="text-sm mb-2">Video not loading?</p>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 inline-flex items-center text-sm"
                >
                  <i className="ri-youtube-fill mr-2"></i>
                  Open in YouTube
                </a>
              </div>
            </div>
          ) : (
            <div className="text-white text-center">
              <h1 className="text-3xl mb-4">No Trailer Available</h1>
              <p className="text-gray-400 mb-6">
                This movie doesn't have a trailer in the database.
              </p>
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 bg-[#6556CD] rounded-lg hover:bg-[#7d6fd8]"
              >
                Go Back
              </button>
            </div>
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
