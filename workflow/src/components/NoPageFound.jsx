import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col fixed inset-0 bg-blue backdrop-blur-[3px] z-40">
      <div className="w-7/12 h-2/3 bg-white border-0 rounded-2xl flex justify-center items-center flex-col gap-6 m-auto">
        <p className="font-bold text-5xl">No Page Found</p>
        <div className="flex justify-center items-center border-0 w-[216px] h-[38px] rounded-[8px] bg-blue-500 text-white cursor-pointer">
          <Link to="/" type="button">
            Go To Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPageFound;
