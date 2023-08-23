import React, { useRef, useState, useContext } from "react";

import Button from "./UI/Button";
import TasksContext from "../store/tasks-store";

const Task = (props) => {
  const ctx = useContext(TasksContext);
  const editTextInputRef = useRef();
  const [isEditing, setIsEditing] = useState(false);

  const editTaskHandler = (id) => {
    const editText = editTextInputRef.current.value;
    ctx.editTask(id, editText);
  };

  return (
    <li>
      {isEditing && (
        <>
          <input
            defaultValue={props.text}
            ref={editTextInputRef}
            onChange={editTaskHandler.bind(null, props.id)}
          />
          <Button onClick={() => setIsEditing(false)}>Save</Button>
        </>
      )}
      {!isEditing && (
        <>
          <p
            onClick={props.onChecked}
            style={{
              textDecoration: props.done && "line-through",
            }}
          >
            {props.text}
          </p>
          <Button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </>
      )}
      <Button className="delete-btn" onClick={props.onRemoveTask}>
        Remove
      </Button>
    </li>
  );
};

export default Task;
