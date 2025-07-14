import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axiosInstance";

const AuthContext = createContext({
  authorized: false,
  login: async () => {},
  logout: () => {},
  signup: async () => {},
  getToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));
  const [authorized, setAuthorized] = useState(!!jwtToken);
  const getToken = () => {
    return jwtToken;
  };
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setJwtToken(token);
      setAuthorized(true);
    }
  }, [authorized]);
  const signup = async (email, password, role, termsCondition) => {
    const res = await api.post("public/signup", {
      email,
      password,
      role,
      termsCondition,
    });
    if (res.status == 200) {
      alert("account created! Please login");
    } else {
      alert("Error in signup");
    }
  };
  const login = async (email, password, role) => {
    try {
      const res = await api.post("public/login", {
        email,
        password,
        role,
      });
      if (res.status == 200) {
        const token = res.data;
        localStorage.setItem("jwtToken", token);
        setJwtToken(token);
        setAuthorized(true);
        return res;
      }
    } catch (error) {
      console.log("error in login");
    }
  };
  const logout = () => {
    setJwtToken(null);
    setAuthorized(false);
    localStorage.removeItem("jwtToken");
    window.location.href = "/";
  };
  return (
    <AuthContext.Provider
      value={{
        authorized,
        login,
        logout,
        signup,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
