import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FaRegCalendarAlt, FaTasks } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import SearchBox from "../components/SearchBox";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth-store";
import Profile from "./Profile";
const Sidebar = () => {
  const { authorized, logout } = useAuth();
  return (
    <div className="w-[252px] min-h-fit bg-blue-500">
      <div className="flex justify-center flex-wrap">
        <Logo />
        <div className="mt-14">
          <SearchBox />
        </div>
        <div className="min-h-min mt-4 flex flex-col items-start space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-[252px] h-[38px] flex items-center text-white font-semibold font-sans pl-10 ${
                isActive && "bg-blue-400 border-l-[3px] border-white"
              } `
            }
          >
            <AiOutlineHome className="mr-2 text-[24px]" />
            <p className="text-[16px]" href="#">
              Dashboard
            </p>
          </NavLink>

          <NavLink
            to="employees"
            className={({ isActive }) =>
              `w-[252px] h-[38px] flex items-center text-white font-semibold font-sans pl-10 ${
                isActive && "bg-blue-400 border-l-[3px] border-white"
              } `
            }
          >
            <BsPeople className="mr-2 text-[24px]" />
            <p className="text-[16px]" href="#">
              Employees
            </p>
          </NavLink>

          <NavLink
            to="attendance"
            className={({ isActive }) =>
              `w-[252px] h-[38px] flex items-center text-white font-semibold font-sans pl-10 ${
                isActive && "bg-blue-400 border-l-[3px] border-white"
              } `
            }
          >
            <FaRegCalendarAlt className="mr-2 text-[24px]" />
            <p className="text-[16px]" href="#">
              Attendance
            </p>
          </NavLink>

          <NavLink
            to="tasks"
            className={({ isActive }) =>
              `w-[252px] h-[38px] flex items-center text-white font-semibold font-sans pl-10 ${
                isActive && "bg-blue-400 border-l-[3px] border-white"
              } `
            }
          >
            <FaTasks className="mr-2 text-[24px]" />
            <p className="text-[16px]" href="#">
              Tasks
            </p>
          </NavLink>

          <NavLink
            to="settings"
            className={({ isActive }) =>
              `w-[252px] h-[38px] flex items-center text-white font-semibold font-sans pl-10 ${
                isActive && "bg-blue-400 border-l-[3px] border-white"
              } `
            }
          >
            <LuSettings className="mr-2 text-[24px]" />
            <p className="text-[16px]" href="#">
              Settings
            </p>
          </NavLink>
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default Sidebar;
