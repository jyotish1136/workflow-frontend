import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../auth-store/authentication";

const EmployeeContext = createContext({
  employee: [],
  getEmployee: async () => {},
  addEmployee: async () => {},
  updateEmployee: async () => {},
  deleteEmployee: async () => {},
});

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const { authorized, getToken } = useAuth();
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));
  useEffect(() => {
    if (authorized) {
      const token = getToken();
      setJwtToken(token);
    }
  }, [authorized]);
  const getEmployee = async () => {
    try {
      const response = await axiosInstance.get("/employees", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setEmployee(response.data);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    }
  };
  useEffect(() => {
    if (authorized) {
      getEmployee();
    }
  }, [authorized]);

  const addEmployee = async (newEmp) => {
    try {
      const response = await axiosInstance.post(
        "/employees",
        {
          name: newEmp.name,
          email: newEmp.email,
          role: newEmp.role,
          department: newEmp.department,
          status: newEmp.status,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      if (response.status == 200) {
        setEmployee((prev) => [...prev, response.data]);
        return response;
      }
    } catch (error) {
      console.error("Failed to add employee:", error);
    }
  };

  const updateEmployee = async (id, updatedEmp) => {
    try {
      const response = await axiosInstance.put(
        `/employees/${id}`,
        {
          name: updatedEmp.name,
          email: updatedEmp.email,
          role: updatedEmp.role,
          department: updatedEmp.department,
          status: updatedEmp.status,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      setEmployee((prev) =>
        prev.map((emp) => (emp.id === id ? response.data : emp))
      );
    } catch (error) {
      console.error("Failed to update employee:", error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axiosInstance.delete(`/employees/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setEmployee((prev) => prev.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error("Failed to delete employee:", error);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        getEmployee,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
export const useEmp = () => useContext(EmployeeContext);
