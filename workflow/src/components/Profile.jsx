import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAuth } from "../store/auth-store";
const Profile = () => {
  const { authorized, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ml-5 mt-56 w-[216px]">
      <div
        className="flex justify-evenly items-center h-15 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="w-[42px] rounded-full"
          src="image.png"
          alt="profile-pic"
        />
        <div className="text-left">
          <p className="font-semibold">Tom Jerry</p>
          <p className="font-light text-sm">Team Manager</p>
        </div>
        <div className="font-semibold text-4xl">
          <RiArrowDropDownLine />
        </div>
      </div>
      {isOpen && authorized && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg z-10 w-40 text-black">
          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 text-red-600  flex justify-center items-center hover:cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
