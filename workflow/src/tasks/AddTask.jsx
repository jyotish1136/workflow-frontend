import { useState } from "react";
import { useTask } from "../store/task-store";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { addTask } = useTask();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    deadline: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskData.title || !taskData.description || !taskData.deadline) {
      alert("Please fill in all fields.");
      return;
    }
    const response = await addTask(taskData);
    if (response.status == 200) {
      navigate(-1);
    }
  };
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <div className="fixed inset-0 z-50 bg-opacity-50 backdrop-blur-[2px] flex justify-center items-center">
      <div className="bg-white w-[480px] p-6 rounded-xl shadow-xl relative">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-5">
          Add New Task
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={taskData.description}
              onChange={handleChange}
              placeholder="Describe the task"
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-blue-400"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={taskData.deadline || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-blue-400 bg-white p-4 z-50"
            />
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
