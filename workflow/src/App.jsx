import "./App.css";
import AuthProvider, { useAuth } from "./auth-store/authentication";
import AddEmployee from "./components/AddEmployee";
import Dashboard from "./components/Dashboard";
import Employees from "./components/Employees";
import Login from "./components/Login";
import NoPageFound from "./components/NoPageFound";
import Sidebar from "./components/Sidebar";
import SignUp from "./components/SignUp";
import Tasks from "./components/Tasks";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeProvider from "./store/employee-store";
import ProtectedRoute from "./components/ProtectedRoute";
import AddTask from "./components/AddTask";
import Attendance from "./components/Attendance";
import Settings from "./components/Settings";
import EmployeeEditForm from "./components/EditEmployee";

function App() {
  const { authorized } = useAuth();
  return (
    <div className="w-full min-h-screen flex bg-blue-200">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={authorized ? <Dashboard /> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance"
            element={
              <ProtectedRoute>
                <Attendance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          >
            <Route
              path="add-task"
              element={
                <ProtectedRoute>
                  <AddTask />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <Employees />
              </ProtectedRoute>
            }
          >
            <Route
              path="add-employee"
              element={
                <ProtectedRoute>
                  <AddEmployee />
                </ProtectedRoute>
              }
            />
            <Route
              path="edit-employee"
              element={
                <ProtectedRoute>
                  <EmployeeEditForm />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
