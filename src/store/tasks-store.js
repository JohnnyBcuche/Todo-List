import React, { createContext, useEffect, useReducer } from "react";

import { tasksReducer } from "../reducers/task-reducer";
import { initialTasks } from "../reducers/task-reducer";

const TasksContext = createContext({
  tasks: [],
  addTask: (task) => {},
  removeTask: (id) => {},
  checkedTask: (id) => {},
  removeDone: () => {},
  editTask: (id, text) => {},
});

export const TasksContextProvider = (props) => {
  const [tasksState, dispatchTasks] = useReducer(
    tasksReducer,
    [],
    initialTasks
  );

  useEffect(() => {
    localStorage.setItem("TASKS_KEY", JSON.stringify(tasksState));
  }, [tasksState]);

  const addTaskHandler = (task) => {
    dispatchTasks({ type: "ADD_ITEM", text_payload: task });
  };

  const removeTaskHandler = (id) => {
    dispatchTasks({ type: "REMOVE_ITEM", id_payload: id });
  };

  const doneHandler = (id) => {
    dispatchTasks({ type: "DONE", id_payload: id });
  };

  const removeDoneHandler = () => {
    dispatchTasks({ type: "REMOVE_DONE" });
  };

  const editTaskHandler = (id, text) => {
    dispatchTasks({ type: "EDIT_TASK", id_payload: id, text_payload: text });
  };

  const TasksContextValues = {
    tasks: tasksState,
    addTask: addTaskHandler,
    removeTask: removeTaskHandler,
    checkedTask: doneHandler,
    removeDone: removeDoneHandler,
    editTask: editTaskHandler,
  };

  return (
    <TasksContext.Provider value={TasksContextValues}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
