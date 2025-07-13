import React from "react";
import { useAuth } from "../auth-store/authentication";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { getToken } = useAuth();
  return getToken() != null ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
