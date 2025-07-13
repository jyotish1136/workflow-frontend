import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="h-[44px] mt-4">
      <img src="/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
