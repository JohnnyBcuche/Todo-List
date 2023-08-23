import React, { useContext } from "react";

import TasksContext from "../store/tasks-store";
import "./TaskCounter.css";

const TaskCounter = () => {
  const ctx = useContext(TasksContext);
  const completedTasks = ctx.tasks.map((task) => task.done).filter(Boolean)
    .length;

  return (
    <div className="task-status">
      <label>
        Pending Tasks: <b>{ctx.tasks.length}</b>
      </label>
      <label>
        Completed Tasks: <b>{completedTasks}</b>
      </label>
    </div>
  );
};

export default TaskCounter;
