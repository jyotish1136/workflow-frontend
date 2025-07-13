import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import SearchBox from "../components/SearchBox";
import { FaRegEdit, FaTrashAlt, FaCheckCircle, FaClock } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";

const Tasks = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("All");

  const [tasks, setTasks] = useState([
    {
      title: "Design Homepage",
      description: "Create responsive homepage layout with Tailwind.",
      deadline: "2025-07-15",
      status: "pending",
    },
    {
      title: "Backend Integration",
      description: "Connect frontend to Spring Boot API.",
      deadline: "2025-07-17",
      status: "completed",
    },
  ]);

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
    setShowAddModal(false);
  };

  const handleEditClick = (task, index) => {
    setSelectedTask({ ...task, index });
    setShowEditModal(true);
  };

  const handleUpdateTask = (updatedTask) => {
    const updated = [...tasks];
    updated[updatedTask.index] = {
      title: updatedTask.title,
      description: updatedTask.description,
      deadline: updatedTask.deadline,
      status: updatedTask.status,
    };
    setTasks(updated);
    setShowEditModal(false);
  };

  const handleDeleteTask = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
  };

  const filteredTasks = tasks
    .filter(
      (t) =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      sortBy === "All" ? true : t.status === sortBy.toLowerCase()
    );

  return (
    <>
      {showAddModal && (
        <AddTask onClose={() => setShowAddModal(false)} onAdd={handleAddTask} />
      )}
      {showEditModal && selectedTask && (
        <EditTask
          task={selectedTask}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleUpdateTask}
        />
      )}

      <div
        className={`w-full bg-blue-200 min-h-screen pt-16 ${
          showAddModal || showEditModal ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <h1 className="text-2xl font-bold text-blue-600 ml-16 mb-6">Tasks</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 hover:cursor-pointer"
          >
            <AiOutlineFileAdd /> Add Task
          </button>
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
            <p className="text-gray-500">Sort By:</p>
            <select
              className="outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <button className="px-5 py-2 rounded-lg border border-blue-300 bg-blue-500 hover:bg-blue-700 font-semibold text-white">
            Export
          </button>
        </div>
        <div className="w-4/5 m-auto bg-white border-0 rounded-2xl px-8 py-4">
          <div className="grid grid-cols-5 gap-4 text-gray-500 font-semibold mb-4 border-b pb-2">
            <p>Title</p>
            <p>Description</p>
            <p>Deadline</p>
            <p>Status</p>
            <p>Actions</p>
          </div>

          {filteredTasks.length === 0 ? (
            <p className="text-center text-gray-400 mt-6">No tasks found</p>
          ) : (
            filteredTasks.map((task, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 items-start text-gray-900 mb-6 border-b pb-4"
              >
                <p className="font-medium">{task.title}</p>
                <p className="whitespace-pre-line break-words max-h-32 overflow-auto">
                  {task.description}
                </p>
                <p className="text-red-600">{task.deadline}</p>

                <p
                  className={`w-[110px] px-2 py-1 text-sm rounded-md flex items-center justify-center gap-1 ${
                    task.status === "completed"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-yellow-100 text-yellow-800 border border-yellow-300"
                  }`}
                >
                  {task.status === "completed" ? (
                    <FaCheckCircle />
                  ) : (
                    <FaClock />
                  )}
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </p>

                <div className="flex items-center gap-3">
                  <FaRegEdit
                    className="w-5 h-5 mt-1 cursor-pointer text-blue-600 hover:text-blue-800"
                    onClick={() => handleEditClick(task, index)}
                  />

                  <FaTrashAlt
                    className="w-5 h-5 mt-1 cursor-pointer text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteTask(index)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Tasks;
