import { useState } from "react";
import { FaUserCheck, FaCalendarAlt } from "react-icons/fa";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    {
      name: "Ravi Sharma",
      date: "2025-07-12",
      status: "Present",
    },
    {
      name: "Ankita Das",
      date: "2025-07-12",
      status: "Absent",
    },
    {
      name: "Mohit Yadav",
      date: "2025-07-12",
      status: "Present",
    },
    {
      name: "Aarti Mehta",
      date: "2025-07-12",
      status: "On Leave",
    },
  ]);

  return (
    <div className="w-full min-h-screen bg-blue-50 px-10 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700 flex items-center gap-2">
          <FaUserCheck className="text-blue-500" />
          Attendance Records
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          Mark Attendance
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">Employee Name</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="px-6 py-4">{record.name}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-400" />
                  {record.date}
                </td>
                <td
                  className={`px-6 py-4 font-medium ${
                    record.status === "Present"
                      ? "text-green-600"
                      : record.status === "Absent"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
