import React, { useEffect, useState } from "react";
import { BsPersonAdd } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import SearchBox from "../components/SearchBox";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEmp } from "../store/emp-store";
import EditEmployee from "./EditEmployee";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";

const Employees = () => {
  const { employee, deleteEmployee } = useEmp();
  const navigate = useNavigate();
  const [emp, setEmp] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    if (Array.isArray(employee)) {
      setEmp(employee);
    } else {
      setEmp([]);
    }
  }, [employee]);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
  };

  const handleEdit = (employeeData) => {
    setEditingEmployee(employeeData);
  };

  const closeEditForm = () => {
    setEditingEmployee(null);
  };

  return (
    <>
      <Outlet />
      {editingEmployee && (
        <EditEmployee employee={editingEmployee} onClose={closeEditForm} />
      )}

      <div
        className={`w-full bg-blue-200 pt-16 ${
          editingEmployee ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <PageTitle pageTitle={"Employees"} />
        <div className="flex justify-center items-center gap-4">
          <Button
            onClick={() => navigate("add-employee")}
            variant={"primary"}
            icon={BsPersonAdd}
          >
            Add new employee
          </Button>
          <SearchBox />
          <div className="flex justify-center items-center gap-2 border-0 w-[216px] h-[38px] rounded-[8px] bg-white">
            <p className="text-gray-500">Sort By:</p>
            <select name="" id="">
              <option value="Newest">Newest</option>
              <option value="Department">Department</option>
            </select>
          </div>
          <Button variant={"primary"}>Export</Button>
        </div>

        <div className="w-auto m-16 bg-white border-0 rounded-2xl px-8 py-4">
          <div className="grid grid-cols-6 justify-items-stretch gap-4 text-gray-500 font-semibold mb-4">
            <p>Name</p>
            <p>Email</p>
            <p>Role</p>
            <p>Department</p>
            <p>Status</p>
            <p>Actions</p>
          </div>

          {emp.map((x) => (
            <div
              key={x.id}
              className="grid grid-cols-6 justify-items-start gap-4  font-semibold mb-2"
            >
              <p>{x.name}</p>
              <p>{x.email}</p>
              <p>{x.role}</p>
              <p>{x.department}</p>
              <p
                className={`w-20 border-2 text-gray-900 rounded-[4px] flex items-center justify-center ${
                  x.status
                    ? "border-green-300 bg-green-100"
                    : "border-red-300 bg-red-100"
                }`}
              >
                {x.status ? "Active" : "Inactive"}
              </p>
              <div className="flex justify-start gap-4 items-center">
                <FaRegEdit
                  className="w-6 h-6 cursor-pointer text-blue-600"
                  onClick={() => handleEdit(x)}
                />
                <AiOutlineDelete
                  className="w-6 h-6 cursor-pointer text-red-600"
                  onClick={() => handleDelete(x.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Employees;
