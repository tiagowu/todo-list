import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ClearTask from "./components/ClearTask";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editInput, setEditInput] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks-list"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("tasks-list", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleSubmitTask = (e, taskInput) => {
    e.preventDefault();
    if (taskInput !== "") {
      const newTask = { id: uuid(), task: taskInput, completed: false, editing: false };
      setTasks((tasks) => [...tasks, newTask]);
      setTaskInput("");
    }
  };

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleComplete = (id) => {
    const newTasks = [...tasks];
    const selectedTask = tasks.find((task) => task.id === id);
    selectedTask.completed = !selectedTask.completed;
    setTasks(newTasks);
  };

  const handleDelete = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  const handleEdit = (id) => {
    const newTasks = [...tasks];
    const selectedTask = tasks.find((task) => task.id === id);
    if (selectedTask.editing === true) selectedTask.editing = false;
    else {
      selectedTask.editing = true;
      setEditInput(selectedTask.task);
    }
    setTasks(newTasks);
  };

  const handleEditChange = (e) => {
    setEditInput(e.target.value);
  };

  const handleUpdateTask = (id, editInput) => {
    const selectedTask = tasks.find((task) => task.id === id);
    if (editInput !== "") {
      const newTasks = [...tasks];
      selectedTask.task = editInput;
      selectedTask.editing = false;
      setTasks(newTasks);
    }
  };

  const handleBlur = (id) => {
    const newTasks = [...tasks];
    const selectedTask = tasks.find((task) => task.id === id);
    selectedTask.editing = false;
    setTasks(newTasks);
  };

  const handleClearAll = () => {
    const remainingTasks = tasks.filter((task) => task.completed === false);
    setTasks(remainingTasks);
  };

  return (
    <>
      <TaskForm
        taskInput={taskInput}
        handleSubmitTask={handleSubmitTask}
        handleChange={handleChange}
      />
      <TaskList
        tasks={tasks}
        editInput={editInput}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleEditChange={handleEditChange}
        handleUpdateTask={handleUpdateTask}
        handleBlur={handleBlur}
      />
      <ClearTask tasksLength={tasks.length} handleClearAll={handleClearAll}></ClearTask>
    </>
  );
}

export default App;
