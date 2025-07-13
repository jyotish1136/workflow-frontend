import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBox = () => {
  return (
    <div className="flex items-center bg-white w-[216px] h-[38px] rounded-[8px] px-2">
      <AiOutlineSearch className="w-[24px] h-[24px] text-blue-500" />
      <input
        type="search"
        placeholder="Search"
        className="ml-2 bg-transparent outline-none flex-1 text-sm"
      />
    </div>
  );
};

export default SearchBox;
