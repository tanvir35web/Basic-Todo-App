import React, { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const BasicTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleAddTask() {
    if (input !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  }

  function handleDeleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <h1>
          {" "}
          <MdOutlineEditNote size={50} /> Todo App{" "}
        </h1>

        <div className="add">
          <form className="formInput">
            <input
              type="text"
              placeholder="add task here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="button" onClick={handleAddTask}>
              Add
            </button>
          </form>

          <ul>
            {tasks.map((task, index) => (
              <li className="taskList" key={index}>
                {task}{" "}
                <div type="button" onClick={() => handleDeleteTask(index)}>
                  <MdDelete />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BasicTodo;
