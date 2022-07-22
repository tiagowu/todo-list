import React from "react";
import Task from "./Task";

const TaskList = ({
  tasks,
  editInput,
  handleComplete,
  handleDelete,
  handleEdit,
  handleEditChange,
  handleUpdateTask,
  handleBlur,
}) => {
  console.log(tasks);
  return (
    <div className="tasks-box">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          editInput={editInput}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleEditChange={handleEditChange}
          handleUpdateTask={handleUpdateTask}
          handleBlur={handleBlur}
        ></Task>
      ))}
    </div>
  );
};
export default TaskList;
