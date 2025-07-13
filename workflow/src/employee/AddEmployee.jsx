import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmp } from "../store/emp-store";

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
    const { name, type, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addEmployee(formData);
    if (res.status == 200) {
      navigate(-1);
    }
    console.log(formData);
  };
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <div className="h-screen w-screen flex flex-col fixed inset-0 bg-blue backdrop-blur-[3px] z-40">
      <div className="w-1/2 h-2/3 bg-gray-100 border-0 rounded-2xl flex m-auto">
        {/* <div className="h-30 relative bottom-0 mt-4">
          <img src="employee.svg" alt="employee" className="h-80 " />
        </div> */}
        <form
          onSubmit={handleSubmit}
          className="flex justify-evenly items-center flex-col gap-6 bg-white w-3/5 m-auto h-4/5 border-0 rounded-2xl"
        >
          <div className="flex flex-col gap-5">
            <div>
              <section>Full Name</section>
              <input
                type="text"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-96 h-8 pl-3 border-1 border-gray-400 rounded-[6px] mt-1"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <section>Email</section>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-96 h-8 pl-3 border-1 border-gray-400 rounded-[6px] mt-1"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div>
              <section>Role</section>
              <div className="flex justify-center items-center border border-gray-400 w-40 h-[38px] rounded-[8px] bg-white">
                <select
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full h-full px-2 rounded-[8px] bg-white"
                >
                  <option value="">-- Select Role --</option>
                  <option value="Admin">Admin</option>
                  <option value="intern">Intern</option>
                  <option value="Intern">User</option>
                  <option value="developer">Developer</option>
                  <option value="Developer">Team Lead</option>
                  <option value="QA Engineer">QA Engineer</option>
                </select>
              </div>
            </div>
            <div>
              <section>Department</section>
              <div className="flex justify-center items-center border border-gray-400 w-45 h-[38px] rounded-[8px] bg-white">
                <select
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full h-full px-2 rounded-[8px] bg-white"
                >
                  <option value="">-- Select Department --</option>
                  <option value="HR">HR</option>
                  <option value="Manager">Manager</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-6 items-start">
            <button
              type="submit"
              className="flex justify-center items-center gap-2 border-0 w-[180px] h-[38px] rounded-[8px] bg-blue-500 text-white px-3 cursor-pointer"
            >
              Add Employee
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex justify-center items-center gap-2 border-0 w-[116px] h-[38px] rounded-[8px] bg-gray-300 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
