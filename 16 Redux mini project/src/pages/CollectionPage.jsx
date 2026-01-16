import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/CollectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(clearCollection());
  };

  const collection = useSelector((state) => state.collection.items);

  return (
    <div className="px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between p-5 mb-5">
          <h2 className="text-xl font-bold capitalize">Your Collection</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="font-semibold text-md px-2 py-1 rounded-lg bg-red-500 active:scale-90 cursor-pointer transition"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h1 className="text-3xl font-medium text-center">
          Collection is Empty!
        </h1>
      )}

      <div className="flex w-full pb-2 flex-wrap gap-2 px-10">
        {collection.map((item, index) => {
          return (
            <div key={index}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
