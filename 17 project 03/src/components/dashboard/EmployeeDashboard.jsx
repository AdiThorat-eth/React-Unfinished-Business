import React from "react";
import Header from "../../others/Header";
import TaskListNo from "../../others/TaskListNo";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div>
      <div className="p-15 bg-[#1C1C1C] h-screen w-full">
        <Header data={data} />
        <TaskListNo data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
