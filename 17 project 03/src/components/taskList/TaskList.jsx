import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="TaskList"
      className="h-[55%] w-full  mt-10 rounded-xl py-5 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
    >
      {data.tasks.map((elem, index) => {
        if (elem.active) return <AcceptTask key={index} elem={elem} />;

        if (elem.NewTask) return <NewTask key={index} elem={elem} />;

        if (elem.completed) return <CompleteTask key={index} elem={elem} />;

        if (elem.failed) return <FailedTask key={index} elem={elem} />;
      })}
    </div>
  );
};

export default TaskList;
