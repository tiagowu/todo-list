import React from "react";
import { FaBroom } from "react-icons/fa";
import "./ClearTask.css";

const ClearTask = ({ tasksLength, handleClearAll }) => {
  return (
    <div className="clear-box">
      {tasksLength >= 1 && (
        <div>
          <button className="btn-clear" onClick={handleClearAll}>
            <FaBroom className="icon"></FaBroom>
            <span>Clear Completed</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ClearTask;
