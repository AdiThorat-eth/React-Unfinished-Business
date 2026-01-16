import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/CollectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));

    dispatch(removeToast());
  };

  return (
    <div className="w-[15.2vw] h-[15.2vw] rounded-lg overflow-hidden border-b-3 border-white relative">
      <a className="h-full w-full" target="_blank" href={item.src}>
        {item.type == "photo" ? (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div className="absolute bottom-0 w-full flex justify-between items-center text-md font-semibold capitalize bg-black/40 text-white p-2 gap-2">
        {/* line-clamp-1 to prevent the title from breaking the layout */}
        <h2 className="line-clamp-1 flex-1">{item.title}</h2>

        <button
          onClick={() => {
            removeFromCollection(item);
          }}
          className="bg-violet-500 text-white rounded px-2 py-0.5 active:scale-90 cursor-pointer shrink-0"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
