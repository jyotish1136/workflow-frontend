import { useState } from "react";
import { FaUserCog, FaLock, FaBell, FaMoon } from "react-icons/fa";
import InputField from "../components/InputField";
import SectionCard from "../components/SectionCard";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

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

  const handleSave = async () => {
    alert("Settings saved!");
  };

  return (
    <div className="w-full min-h-screen bg-blue-50 px-6 md:px-10 py-16">
      <PageTitle icon={<FaUserCog />} pageTitle="Account Settings" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SectionCard title="Profile Information">
          <div className="flex flex-col gap-4">
            <InputField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
        </SectionCard>

        <SectionCard title="Change Password" icon={<FaLock />}>
          <div className="flex flex-col gap-4">
            <InputField
              label="Current Password"
              name="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter current password"
            />
            <InputField
              label="New Password"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
            />
          </div>
        </SectionCard>
        <div className="mt-10">
          <Button onClick={handleSave} variant="primary">
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
