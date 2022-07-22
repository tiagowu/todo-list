import React from "react";
import { BsPlusLg } from "react-icons/bs";
import "./TaskForm.css";

const TaskForm = ({ taskInput, handleSubmitTask, handleChange }) => {
  return (
    <div className="input-box">
      <form onSubmit={(e) => handleSubmitTask(e, taskInput)}>
        <input
          type="text"
          className="task-input"
          value={taskInput}
          onChange={handleChange}
          autoComplete="off"
          required
          onInvalid={(e) => e.target.setCustomValidity("Please enter a task.")}
          onInput={(e) => e.target.setCustomValidity("")}
          autoFocus
        />
        <button type="submit" className="btn-add">
          <BsPlusLg className="icon" />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
