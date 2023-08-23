import React, { useContext } from "react";

import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import TasksContext from "./store/tasks-store";
import "./App.css";

const App = () => {
  const ctx = useContext(TasksContext);

  return (
    <div className="container">
      <AddTask />
      {ctx.tasks.length > 0 && <TasksList />}
    </div>
  );
};

export default App;
