import React from "react";

const CompleteTask = () => {
  return (
    <div className="h-full w-75 bg-slate-400 rounded-xl shrink-0 p-5">
      <div className="flex justify-between items-center text-sm">
        <h3 className="bg-red-600 px-3 py-1 rounded ">High</h3>
        <h4 className="text-sm">30 Feb 2000</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make yoyo</h2>
      <p className="text-sm mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        eveniet eum hic! Ipsum, similique obcaecati.
      </p>
      <div className="mt-4">
        <button className="w-full bg-green-500">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
