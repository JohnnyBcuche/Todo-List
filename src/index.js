import React from "react";
import ReactDOM from "react-dom/client";
import { TasksContextProvider } from "./store/tasks-store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TasksContextProvider>
    <App />
  </TasksContextProvider>
);
