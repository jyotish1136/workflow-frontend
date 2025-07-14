import { useState } from "react";
import { FaUserCheck, FaCalendarAlt } from "react-icons/fa";
import SearchBox from "./SearchBox";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    { name: "Ravi Sharma", date: "2025-07-12", status: "Present" },
    { name: "Ankita Das", date: "2025-07-12", status: "Absent" },
    { name: "Mohit Yadav", date: "2025-07-12", status: "Present" },
    { name: "Aarti Mehta", date: "2025-07-12", status: "On Leave" },
  ]);

  return (
    <div className="w-full bg-blue-200 min-h-screen pt-16">
      {/* Title */}
      <h1 className="text-2xl font-bold text-blue-500 mb-8 ml-16 flex items-center gap-2">
        <FaUserCheck />
        Attendance
      </h1>

      {/* Controls */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        <button className="w-[216px] h-[38px] rounded-[8px] bg-blue-500 text-white flex justify-center items-center gap-2 shadow">
          Mark Attendance
        </button>
        <SearchBox />
        <div className="w-[216px] h-[38px] rounded-[8px] bg-white flex items-center px-3 gap-2 shadow">
          <p className="text-gray-500">Sort By:</p>
          <select className="text-gray-700 bg-white outline-none">
            <option>Newest</option>
            <option>Date</option>
            <option>Name</option>
          </select>
        </div>
        <button className="w-[116px] h-[38px] rounded-[8px] bg-blue-500 text-white shadow">
          Export
        </button>
      </div>

      <div className="w-4/5 mx-auto bg-white border-0 rounded-2xl px-3 py-4 shadow-md">
        <div className="grid grid-cols-4 gap-4 text-center text-gray-500 font-semibold mb-2">
          <div>Sl. No.</div>
          <div>Employee Name</div>
          <div>Date</div>
          <div>Status</div>
        </div>
        {attendanceData.map((record, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-4 items-center text-center text-gray-900 mb-4"
          >
            <div>{index + 1}</div>
            <div>{record.name}</div>

            <div className="flex justify-center items-center gap-2 text-blue-600">
              <FaCalendarAlt className="text-blue-400" />
              {record.date}
            </div>
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-[4px] text-sm font-semibold ${
                  record.status === "Present"
                    ? "bg-green-100 text-green-700"
                    : record.status === "Absent"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {record.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
