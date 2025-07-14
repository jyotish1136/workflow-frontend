import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useAuth } from "./store/auth-store";
import Dashboard from "./components/Dashboard";
import NoPageFound from "./components/NoPageFound";
import Sidebar from "./components/Sidebar";
import Attendance from "./components/Attendance";
import Tasks from "./tasks/Tasks";
import AddTask from "./tasks/AddTask";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import Settings from "./components/Settings";
import ProtectedRoute from "./authentication/ProtectedRoute";
import Employees from "./employee/Employees";
import EditEmployee from "./employee/EditEmployee";
import AddEmployee from "./employee/AddEmployee";
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
          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
