import "./App.css";
import AuthProvider, { useAuth } from "./auth-store/authentication";
import AddEmployee from "./components/AddEmployee";
import Dashboard from "./components/Dashboard";
import Employees from "./components/Employees";
import Login from "./components/Login";
import NoPageFound from "./components/NoPageFound";
import Sidebar from "./components/Sidebar";
import SignUp from "./components/SignUp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeProvider from "./store/employee-store";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { authorized } = useAuth();
  return (
    <div className="w-full h-full flex bg-blue-200">
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
