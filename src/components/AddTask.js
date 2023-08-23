import React, { Fragment, useContext, useRef, useState } from "react";

import Button from "./UI/Button";
import TasksContext from "../store/tasks-store";
import TaskCounter from "./TaksCounter";
import ErrorModal from "./ErrorModal";
import "./AddTask.css";

const AddTask = () => {
  const textInputRef = useRef();
  const ctx = useContext(TasksContext);
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const addedText = textInputRef.current.value;
    if (addedText.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid todo (non-empty values).",
      });
      return;
    }

    ctx.tasks.forEach((task) => {
      if (
        task.text
          .trim()
          .replace(/ /g, "")
          .toLowerCase() ===
        addedText
          .trim()
          .replace(/ /g, "")
          .toLowerCase()
      ) {
        setError({
          title: "Already on the list",
          message: "Please enter new task.",
        });
      }
    });

    ctx.addTask(addedText);
    textInputRef.current.value = "";
    textInputRef.current.blur();
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="todo-form">
        <h2>Todo List</h2>
        <form className="confirm-form" onSubmit={submitHandler}>
          <input type="text" placeholder="Add task" ref={textInputRef} />
          <Button type="submit">Add</Button>
        </form>
        <TaskCounter />
      </div>
    </Fragment>
  );
};

export default AddTask;
