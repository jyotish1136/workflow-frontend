import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-store";
import api from "../api/axiosInstance";

const TaskContext = createContext({
  tasks: [],
  addTask: async () => {},
  getTask: async () => {},
  updateTask: async () => {},
  deleteTask: async () => {},
});

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { authorized, getToken } = useAuth();
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));
  useEffect(() => {
    if (authorized) {
      const token = getToken();
      setJwtToken(token);
    }
  }, [authorized]);
  const getTask = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };
  useEffect(() => {
    if (authorized) {
      getTask();
    }
  }, [authorized]);
  const addTask = async (newTask) => {
    try {
      const response = await api.post("/tasks", {
        title: newTask.title,
        description: newTask.description,
        deadline: newTask.deadline,
        status: false,
      });
      if (response.status == 200) {
        setTasks((prev) => [...prev, response.data]);
        return response;
      }
    } catch (error) {
      console.error("Failed to add employee:", error);
    }
  };

  const updateTask = async (id, newTask) => {
    try {
      const response = await api.put("/tasks", {
        id: id,
        title: newTask.title,
        description: newTask.description,
        deadline: newTask.deadline,
        status: newTask.status,
      });
      setTasks((prev) => prev.map((x) => (x.id === id ? response.data : x)));
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/delete/${id}`);
      setTasks((prev) => prev.filter((x) => x.id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTask,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
export const useTask = () => useContext(TaskContext);
