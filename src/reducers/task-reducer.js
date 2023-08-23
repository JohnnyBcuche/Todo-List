export const initialTasks = () => {
  const storedTasks = localStorage.getItem("TASKS_KEY");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const tasksReducer = (state = initialTasks, action) => {
  if (action.type === "ADD_ITEM") {
    const existingItem = state.map((task) =>
      task.text
        .trim()
        .replace(/ /g, "")
        .toLowerCase()
    );
    const newItem = action.text_payload
      .trim()
      .replace(/ /g, "")
      .toLowerCase();

    if (existingItem.includes(newItem)) {
      return state;
    } else {
      return [
        ...state,
        {
          id: Math.random().toString(),
          text: action.text_payload,
          done: false,
        },
      ];
    }
  }

  if (action.type === "REMOVE_ITEM") {
    return state.filter((task) => task.id !== action.id_payload);
  }

  if (action.type === "DONE") {
    return [
      ...state.map((task) => {
        if (task.id === action.id_payload) {
          return { ...task, done: (task.done = !task.done) };
        }
        return task;
      }),
    ];
  }

  if (action.type === "REMOVE_DONE") {
    return [...state.filter((task) => task.done === false)];
  }

  if (action.type === "EDIT_TASK") {
    return [
      ...state.map((task) => {
        if (task.id === action.id_payload) {
          return { ...task, text: action.text_payload };
        }
        return task;
      }),
    ];
  }

  return state;
};
