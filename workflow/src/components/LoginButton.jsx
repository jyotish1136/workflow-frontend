import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link
      to="/"
      className="flex justify-center items-center gap-2 border-0 w-[116px] h-[38px] rounded-[8px] bg-blue-500 text-white"
    >
      <button type="button">Login</button>
    </Link>
  );
};

export default LoginButton;
