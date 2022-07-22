import React from "react";
import { BsCheckLg } from "react-icons/bs";
import "./TaskEdit.css";

const TaskEdit = ({ task, editInput, handleEditChange, handleUpdateTask, handleBlur }) => {
  return (
    <div className="edit-box">
      <input
        type="text"
        className="edit-input"
        value={editInput}
        onChange={handleEditChange}
        autoComplete="off"
        onBlur={() =>
          setTimeout(function () {
            handleBlur(task.id);
          }, 200)
        }
        autoFocus
      ></input>
      <button className="button btn-add" onClick={() => handleUpdateTask(task.id, editInput)}>
        <BsCheckLg className="icon" />
      </button>
    </div>
  );
};

export default TaskEdit;
