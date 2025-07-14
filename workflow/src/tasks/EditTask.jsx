import { useState } from "react";
import { useTask } from "../store/task-store";

const EditTask = ({ task, onClose }) => {
  const [formData, setFormData] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    deadline: task.deadline,
    status: task.status,
    index: task.index,
  });
  const { updateTask } = useTask();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateTask(task.id, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[450px]">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Edit Task</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            placeholder="Title"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded h-24"
            placeholder="Description"
            required
          />
          <input
            type="date"
            name="deadline"
            value={formData.deadline || ""}
            onChange={handleChange}
            className="border border-gray-300 bg-white p-4 rounded z-50"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            required
          >
            <option value="false">Pending</option>
            <option value="true">Completed</option>
          </select>
          <div className="flex justify-end gap-4 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
