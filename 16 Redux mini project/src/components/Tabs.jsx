import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/SearchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "Gifs"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-10 p-10">
      {tabs.map((elem, index) => {
        return (
          <button
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
            className={`${
              activeTab == elem ? "bg-emerald-400" : "bg-zinc-500"
            } transition px-5 py-2 rounded uppercase cursor-pointer active:scale-90`}
            key={index}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
