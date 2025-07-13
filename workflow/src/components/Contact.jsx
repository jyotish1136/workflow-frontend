import React from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-1 mt-4">
      <div className="w-full flex justify-center items-center gap-1">
        <span className="text-gray-400 text-[12px]">Connect with</span>
      </div>
      <div className="w-full flex justify-center items-center gap-1">
        <span className="text-blue-500 text-[36px]">
          <BiLogoGoogle />
        </span>
        <span className="text-blue-500 text-[28px]">
          <FaFacebook />
        </span>
      </div>
    </div>
  );
};

export default Contact;
