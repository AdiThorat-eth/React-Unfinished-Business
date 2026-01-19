import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);

    // localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full  items-start justify-around"
      >
        <div className="mt-4">
          <h1 className="text-6xl">Task</h1>
          <h1 className="text-8xl font-semibold">Creation</h1>
        </div>

        <div className="w-1/4 px-1  0">
          <div>
            <h3 className="mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="placeholder:text-gray-400 border border-white  mb-2 p-1 w-full"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          <div>
            <h3 className="mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="mb-2 p-1 w-full placeholder:text-gray-500 border border-white"
              type="date"
              placeholder:text-gray-500
              border
              border-white
            />
          </div>

          <div>
            <h3 className="mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="placeholder:text-gray-400 border border-white mb-2 p-1 w-full"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="placeholder:text-gray-400 border border-white  mb-2 p-1 w-full"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          <h3 className="mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none placeholder:text-gray-400 border border-white  p-1"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="px-3 py-2 bg-emerald-600 mt-8 rounded-full font-semibold active:scale-90 transition-all">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
