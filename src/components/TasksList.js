import React, { useContext } from "react";

import Task from "./Task";
import Card from "./UI/Card";
import Button from "./UI/Button";
import TasksContext from "../store/tasks-store";
import "./TasksList.css";

const TaskList = () => {
  const ctx = useContext(TasksContext);

  const checkedTaskHandler = (id) => {
    ctx.checkedTask(id);
  };
  const removeTaskHandler = (id) => {
    ctx.removeTask(id);
  };

  return (
    <Card className="todo-list">
      <Button onClick={ctx.removeDone}>Clear Completed Tasks</Button>

      <div>
        <ul>
          {ctx.tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              isEditing={task.isEditing}
              onChecked={checkedTaskHandler.bind(null, task.id)}
              onRemoveTask={removeTaskHandler.bind(null, task.id)}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default TaskList;
