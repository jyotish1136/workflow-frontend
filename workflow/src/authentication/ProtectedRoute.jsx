import React from "react";
import { useAuth } from "../store/auth-store";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { getToken } = useAuth();
  return getToken() != null ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
