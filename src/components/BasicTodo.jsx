import React, { useState, useEffect, useRef } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "./BasicTodoResponsive.css";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

const BasicTodo = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (storedTasks) {
            setTasks(storedTasks);
        }
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleAddTask() {
        if (input.trim() !== "") {
            setTasks([...tasks, { item: input, checked: false }]);
            setInput("");
        }
    }

    function handleDeleteTask(index) {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleAddTask();
        }
    }

    function handleChecked(index) {
        const newTasks = [...tasks];
        newTasks[index].checked = !newTasks[index].checked;
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
                        <motion.input
                            whileTap={{ scale: 0.98 }}
                            type="text"
                            placeholder="add task here . . ."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            ref={inputRef}
                        />
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="addButton"
                            type="button"
                            onClick={handleAddTask}
                        >
                            Add
                        </motion.button>
                    </form>

                    <ul className="unOrderList">
                        {tasks.map((task, index) => (
                            <motion.li
                                initial={{ y: -200, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="taskList"
                                key={index}
                            >
                                <span
                                    style={{
                                        textDecoration: task.checked
                                            ? "line-through"
                                            : "none",
                                        opacity: task.checked ? 0.5 : 1,
                                    }}
                                >
                                    {task.item}
                                </span>
                                <div className="symbols">
                                    <span
                                        onClick={() => handleChecked(index)}
                                        className="toggleChecked"
                                    >
                                        {task.checked ? (
                                            <FaCircleCheck />
                                        ) : (
                                            <FaRegCircleCheck />
                                        )}
                                    </span>

                                    <motion.div
                                        whileTap={{ scale: 0.9 }}
                                        className="deleteButton"
                                        type="button"
                                        onClick={() => handleDeleteTask(index)}
                                    >
                                        <MdDelete />
                                    </motion.div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BasicTodo;
