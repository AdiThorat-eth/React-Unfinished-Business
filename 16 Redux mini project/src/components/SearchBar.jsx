import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/SearchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-5 p-10 bg-(--c2)"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="bg-(--c1) border-2 px-4 py-2 text-xl rounded outline-none w-full"
          type="text"
          placeholder="Search anything..."
        />
        <button className="bg-(--c1) border-2 px-4 py-2 text-xl rounded outline-none  cursor-pointer required: active:scale-90 ">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
