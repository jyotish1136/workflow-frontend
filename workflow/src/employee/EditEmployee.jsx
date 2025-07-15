import React, { useState } from "react";
import { useEmp } from "../store/emp-store";
import Button from "../components/Button";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

const EditEmployee = ({ employee, onClose }) => {
  const { updateEmployee } = useEmp();
  const [formData, setFormData] = useState({ ...employee });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
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
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Edit Employee
        </h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <InputField
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <SelectField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              options={["Admin", "User", "Intern"]}
              required
            />
            <InputField
              label="Department"
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Department"
              required
            />
          </div>

          <label className="flex gap-2 items-center mt-2">
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
            />
            <span className="text-gray-700 font-semibold">Active</span>
          </label>

          <div className="flex justify-end gap-4 mt-4">
            <Button type="button" onClick={onClose} variant="danger">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
