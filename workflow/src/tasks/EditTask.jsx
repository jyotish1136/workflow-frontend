import { useState } from "react";
import { useTask } from "../store/task-store";
import Button from "../components/Button";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

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
          <InputField
            label={"Title"}
            type={"text"}
            name={"title"}
            value={formData.title}
            onChange={handleChange}
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
          <InputField
            type={"date"}
            name={"deadline"}
            value={formData.deadline || ""}
            onChange={handleChange}
            required
          />

          <SelectField
            name={"status"}
            value={formData.status}
            onChange={handleChange}
            options={["Pending", "Completed"]}
            required
          >
            <option value="false">Pending</option>
            <option value="true">Completed</option>
          </SelectField>
          <div className="flex justify-end gap-4 mt-2">
            <Button type={"button"} variant={"danger"} onClick={onClose}>
              Cancel
            </Button>
            <Button type={"submit"} variant={"primary"}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
