import React from "react";

const Role = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <section>Role</section>
      </div>
      <div>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" name="option" className="accent-blue-500" />
          <span className="text-gray-700 text-sm">Admin</span>
          <input type="radio" name="option" className="accent-blue-500" />
          <span className="text-gray-700 text-sm">Intern</span>
          <input type="radio" name="option" className="accent-blue-500" />
          <span className="text-gray-700 text-sm">User</span>
        </label>
      </div>
    </div>
  );
};

export default Role;
