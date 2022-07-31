import React from "react";
import { BsTrashFill, BsPencilFill } from "react-icons/bs";
import TaskEdit from "./TaskEdit";
import "./Task.css";

const Task = ({
  task,
  handleComplete,
  handleDelete,
  handleEdit,
  editInput,
  handleEditChange,
  handleUpdateTask,
  handleBlur,
}) => {
  return (
    <div className="task-box">
      <label className="checkbox-container">
        <input type="checkbox" checked={task.completed} onChange={() => handleComplete(task.id)} />
        <span className="checkmark" />
      </label>
      {task.editing ? (
        <TaskEdit
          task={task}
          editInput={editInput}
          handleEditChange={handleEditChange}
          handleUpdateTask={handleUpdateTask}
          handleBlur={handleBlur}
        ></TaskEdit>
      ) : (
        <span className={task.completed ? "task-name task-complete" : "task-name"}>
          {task.task}
        </span>
      )}
      <div className="buttons-box">
        <button className="btn-edit" onClick={() => handleEdit(task.id)}>
          <BsPencilFill className="icon" />
        </button>
        <button className="btn-delete" onClick={() => handleDelete(task.id)}>
          <BsTrashFill className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Task;
