import { useState } from "react";
import AddTask from "./AddTask";

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([
    {
      title: "Design Homepage",
      description: "Create responsive homepage layout with Tailwind.",
      deadline: "2025-07-15",
    },
    {
      title: "Backend Integration",
      description: "Connect frontend to Spring Boot API.",
      deadline: "2025-07-17",
    },
  ]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen w-full bg-blue-50 flex flex-col items-center pt-16">
      <div className="flex justify-between w-4/5 mb-8">
        <h1 className="text-3xl font-bold text-gray-700">Tasks</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          Add Task
        </button>
      </div>

      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md border-l-4 border-blue-500"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {task.title}
            </h2>
            <p className="text-gray-600 mt-2">{task.description}</p>
            <p className="text-sm text-gray-500 mt-3">
              Deadline:{" "}
              <span className="text-red-600 font-medium">{task.deadline}</span>
            </p>
          </div>
        ))}
      </div>

      {showModal && (
        <AddTask
          onClose={() => setShowModal(false)}
          onAdd={(taskData) => handleAddTask(taskData)}
        />
      )}
    </div>
  );
};

export default Tasks;
