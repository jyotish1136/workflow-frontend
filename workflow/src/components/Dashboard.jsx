import { BsPeople } from "react-icons/bs";
import { FaArrowDown, FaArrowUp, FaTasks } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Calendar from "./Calendar";
import BarChart from "./BarChart";
import { useEmp } from "../store/emp-store";
import { useTask } from "../store/task-store";
const Dashboard = () => {
  const { employee } = useEmp();
  const { tasks } = useTask();
  return (
    <div className="w-full flex flex-col items-center bg-blue-200 ">
      <div className="h-1/4 flex gap-6 mt-14">
        <div className="w-80 h-36 border-0 gap-13 rounded-3xl bg-white flex justify-center items-center">
          <div className="flex gap-3 flex-col items-start pl-2">
            <p className="text-[16px] text-gray-500 font-sans">
              Total Employee
            </p>
            <p className="text-5xl text-blue-500 font-bold font-sans">
              {employee.length}
            </p>
            <div className="flex gap-2 text-green-500 items-center">
              <FaArrowUp className="text-2xl" />
              <p className="font-sans">12% from last month</p>
            </div>
          </div>
          <div className="">
            <BsPeople className="mr-2 text-[50px] text-gray-500" />
          </div>
        </div>
        <div className="w-80 h-36 border-0 gap-13 rounded-3xl bg-white flex justify-center items-center">
          <div className="flex gap-3 flex-col items-start pl-2">
            <p className="text-[16px] text-gray-500 font-sans">Active Tasks</p>
            <p className="text-5xl text-blue-500 font-bold font-sans">
              {tasks.length}
            </p>
            <div className="flex gap-2 text-red-500 items-center">
              <FaArrowDown className="text-2xl" />
              <p className="font-sans ">3% from last month</p>
            </div>
          </div>
          <div className="">
            <FaTasks className="mr-2 text-[50px] text-gray-500" />
          </div>
        </div>
        <div className="w-80 h-36 border-0 gap-13 rounded-3xl bg-white flex justify-center items-center">
          <div className="flex gap-3 flex-col items-start pl-2">
            <p className="text-[16px] text-gray-500 font-sans">Interns</p>
            <p className="text-5xl text-blue-500 font-bold font-sans">24</p>
            <div className="flex gap-2 text-green-500 items-center">
              <FaArrowUp className="text-2xl" />
              <p className="font-sans">12% from last month</p>
            </div>
          </div>
          <div className="">
            <PiStudentFill className="mr-2 text-[50px] text-gray-500" />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-4/5 h-4/5 gap-6 items-start start-4 mt-8">
        <div className="w-3/5 h-auto bg-white border-0 rounded-3xl ml-2  ">
          <div className="flex justify-between m-5 mb-0">
            <p className="text-2xl text-gray-800 font-bold">
              Employee Activity
            </p>
            <p className="text-gray-500">Quarterly</p>
          </div>
          <div className="h-auto flex justify-between m-5 mb-0">
            <BarChart />
          </div>
        </div>
        <div className="w-2/5 bg-white border-0 rounded-3xl">
          <div className="flex justify-between mt-5 ml-5">
            <p className="text-2xl text-gray-800 font-bold">
              Attendance Overview
            </p>
          </div>
          <div>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
