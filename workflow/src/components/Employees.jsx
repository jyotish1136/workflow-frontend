import React, { useEffect, useState } from "react";
import { BsPersonAdd } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import SearchBox from "./SearchBox";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEmp } from "../store/employee-store";
import EditEmployee from "./EditEmployee";

const Employees = () => {
  const { employee, deleteEmployee } = useEmp();
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
      {/* Show EditEmployee modal if editing */}
      {editingEmployee && (
        <EditEmployee employee={editingEmployee} onClose={closeEditForm} />
      )}

      <div
        className={`w-full bg-blue-200 ${
          editingEmployee ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <h1 className="text-2xl font-bold text-blue-500 mt-12 ml-16">
          Employees
        </h1>
        <div className="flex justify-center items-center gap-4">
          <Link
            to="add-employee"
            className="flex justify-center items-center gap-2 border-0 w-[216px] h-[38px] rounded-[8px]  bg-blue-500 text-white"
          >
            <BsPersonAdd />
            <p>Add new employee</p>
          </Link>
          <SearchBox />
          <div className="flex justify-center items-center gap-2 border-0 w-[216px] h-[38px] rounded-[8px] bg-white">
            <p className="text-gray-500">Sort By:</p>
            <select name="" id="">
              <option value="Newest">Newest</option>
              <option value="Department">Department</option>
            </select>
          </div>
          <div className="flex justify-center items-center gap-2 border-0 w-[116px] h-[38px] rounded-[8px] bg-blue-500 text-white">
            <button type="button">Export</button>
          </div>
        </div>

        <div className="w-4/5 m-16 bg-white border-0 rounded-2xl px-8 py-4">
          <div className="grid grid-cols-6 gap-4 text-gray-500 font-semibold mb-2">
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
              className="grid grid-cols-6 gap-4 items-center text-gray-900 mb-2"
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
