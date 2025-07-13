import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
const SignUpButton = () => {
  return (
    <Link
      to="signup"
      type="button"
      className="flex justify-center items-center gap-2 border-0 px-3 h-[38px] font-medium rounded-[8px] bg-blue-500 text-white cursor-pointer"
    >
      <HiOutlineMail />
      <span className="pb-1">Sign Up with email</span>
    </Link>
  );
};

export default SignUpButton;
