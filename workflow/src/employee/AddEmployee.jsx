import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmp } from "../store/emp-store";
import Button from "../components/Button";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import PageTitle from "../components/PageTitle";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
  });

  const { addEmployee } = useEmp();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addEmployee(formData);
    if (res.status === 200) {
      navigate(-1);
    } else {
      alert("Error occurred in adding employee");
    }
    console.log(formData);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 z-40 bg-opacity-50 backdrop-blur-[2px] flex justify-center items-center">
      <div className="bg-white min-w-1/3 p-6 rounded-xl shadow-xl relative">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-5">
          Add Employee
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-fit m-auto p-6"
        >
          <div className="flex flex-col gap-4 w-full">
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
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <SelectField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              options={["Admin", "Intern", "User"]}
            />
            <SelectField
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              options={[
                "HR",
                "Manager",
                "Development",
                "Design",
                "Finance",
                "Marketing",
              ]}
            />
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <Button type="submit" variant="primary">
              Add Employee
            </Button>
            <Button type="button" onClick={handleCancel} variant="danger">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
