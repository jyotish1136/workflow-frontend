import { useState } from "react";

const AddTask = ({ onClose }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskData.title || !taskData.description || !taskData.deadline) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("New Task:", taskData);

    onClose();
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
              value={taskData.deadline}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-blue-400"
            />
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              onClick={onClose}
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
