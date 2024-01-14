import React, { useState, useEffect, useRef } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const BasicTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  // for local storage start

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // for local storage end

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

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleAddTask();
    }
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
              placeholder="add task here . . ."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              ref={inputRef}

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
