import React from "react";

const AllTask = () => {
  return (
    <div
      id="tasks"
      className="bg-[#1C1C1C] p-5 mt-5 rounded h-48 overflow-auto"
    >
      <div className="bg-red-500 mb-2 py-2 px-4 flex justify-between">
        <h2>Yoyo</h2>
        <h3>task</h3>
        <h5>status</h5>
      </div>
      <div className="bg-green-500 mb-2 py-2 px-4 flex justify-between">
        <h2>Yoyo</h2>
        <h3>task</h3>
        <h5>status</h5>
      </div>
      <div className="bg-yellow-500 mb-2 py-2 px-4 flex justify-between">
        <h2>Yoyo</h2>
        <h3>task</h3>
        <h5>status</h5>
      </div>
      <div className="bg-purple-500 mb-2 py-2 px-4 flex justify-between">
        <h2>Yoyo</h2>
        <h3>task</h3>
        <h5>status</h5>
      </div>
    </div>
  );
};

export default AllTask;
