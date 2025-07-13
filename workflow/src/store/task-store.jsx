import { createContext } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: async () => {},
  getTask: async () => {},
  updateTask: async () => {},
  deleteTask: async () => {},
});
