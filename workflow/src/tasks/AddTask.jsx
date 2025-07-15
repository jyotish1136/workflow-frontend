import { useState } from "react";
import { useTask } from "../store/task-store";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

const AddTask = () => {
  const { addTask } = useTask();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    deadline: "",
    status: "Pending",
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
    } else {
      alert("Error occurred");
    }
  };
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <div className="fixed inset-0 z-40 bg-opacity-50 backdrop-blur-[2px] flex justify-center items-center">
      <div className="bg-white min-w-1/3 p-6 rounded-xl shadow-xl relative">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-5">
          Add New Task
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            label={"Title"}
            type={"text"}
            name={"title"}
            value={taskData.title}
            onChange={handleChange}
            placeholder={"Enter task title"}
          />

          <label className="block text-sm text-gray-600 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            placeholder="Describe the task"
            rows={4}
            className="w-full border  px-4 py-2 rounded-lg focus:outline-blue-300"
          ></textarea>
          <InputField
            label={"Deadline"}
            type={"date"}
            name={"deadline"}
            value={taskData.deadline}
            onChange={handleChange}
          />
          <div className="flex justify-end gap-3 mt-2">
            <Button type={"button"} variant={"danger"} onClick={handleCancel}>
              Cancel
            </Button>
            <Button type={"submit"} variant={"primary"}>
              Add Task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
