import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded h-52 text-center">
      <div className="mb-2 py-2 px-4 flex justify-between text-lg font-md border-2 border-white rounded-full">
        <h5 className="w-1/5">Employee Name</h5>
        <h5 className="w-1/5">New Task</h5>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed Task</h5>
        <h5 className="w-1/5">Failed Task</h5>
      </div>

      <div id="tasks" className="h-[80%] overflow-auto">
        {userData.map((elem, index) => {
          return (
            <div key={index} className=" mb-2 py-2 px-4 flex justify-between">
              <h5 className="text-lg font-md w-1/5">{elem.firstName}</h5>
              <h5 className="text-lg font-md w-1/5 text-sky-500">
                {elem.taskCounts.newTask}
              </h5>
              <h5 className="text-lg font-md w-1/5 text-yellow-500">
                {elem.taskCounts.active}
              </h5>
              <h5 className="text-lg font-md w-1/5 text-green-500">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-md w-1/5 text-red-500">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
