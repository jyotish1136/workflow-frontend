import { useState } from "react";
import { FaUserCog, FaLock, FaBell, FaMoon } from "react-icons/fa";

const Settings = () => {
  const [formData, setFormData] = useState({
    name: "Tom Jerry",
    email: "tom@example.com",
    currentPassword: "",
    newPassword: "",
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <div className="w-full min-h-screen bg-blue-50 px-10 py-16">
      <h1 className="text-3xl font-bold text-gray-700 mb-10 flex items-center gap-2">
        <FaUserCog className="text-blue-600" /> Account Settings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Profile Information
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                type="text"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                type="email"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaLock /> Change Password
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-600 mb-1">
                Current Password
              </label>
              <input
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                type="password"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">New Password</label>
              <input
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                type="password"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaBell /> Notification Settings
          </h2>
          <label className="flex items-center gap-3 text-gray-700">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="accent-blue-500"
            />
            Enable email notifications
          </label>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaMoon /> Theme Settings
          </h2>
          <label className="flex items-center gap-3 text-gray-700">
            <input
              type="checkbox"
              name="darkMode"
              checked={formData.darkMode}
              onChange={handleChange}
              className="accent-blue-500"
            />
            Enable dark mode (Coming soon)
          </label>
        </div>
      </div>

      <div className="mt-10">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
