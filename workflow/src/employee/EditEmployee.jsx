import React, { useState } from "react";
import { useEmp } from "../store/emp-store";

const EditEmployee = ({ employee, onClose }) => {
  const { updateEmployee } = useEmp();
  const [formData, setFormData] = useState({ ...employee });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateEmployee(formData.id, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Edit Employee</h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name || ""}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <select
            name="role"
            value={formData.role || ""}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Intern">Intern</option>
          </select>
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department || ""}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
            />
            <span>Active</span>
          </label>
          <div className="flex justify-end gap-4 mt-2">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
