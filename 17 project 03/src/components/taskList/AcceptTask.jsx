import React from "react";

const AcceptTask = ({ elem }) => {
  return (
    <div className="h-full relative w-75 bg-violet-400 rounded-xl shrink-0 p-5">
      <div className="flex justify-between items-center text-sm">
        <h3 className="bg-red-600 px-3 py-1 rounded ">{elem.taskCategory}</h3>
        <h4 className="text-sm">{elem.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{elem.taskTitle}</h2>
      <p className="text-sm mt-2">{elem.taskDescription}</p>
      <div className="flex justify-between mt-4 absolute bottom-5 gap-5">
        <button className="bg-green-500 py-1 px-2 text-sm">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
