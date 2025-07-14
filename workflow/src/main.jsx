import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./store/auth-store.jsx";
import EmployeeProvider from "./store/emp-store.jsx";
import TaskProvider from "./store/task-store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <EmployeeProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </EmployeeProvider>
    </AuthProvider>
  </StrictMode>
);
