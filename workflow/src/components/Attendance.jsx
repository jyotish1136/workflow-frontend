import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import SelectField from "../components/SelectField";
// import { useAttendance } from "../store/attendance-store";

const Attendance = () => {
  // const { fetchAttendance } = useAttendance();
  const [attendanceData, setAttendanceData] = useState([
    { name: "Ravi Sharma", date: "2025-07-12", status: "Present" },
    { name: "Ankita Das", date: "2025-07-12", status: "Absent" },
    { name: "Mohit Yadav", date: "2025-07-12", status: "Present" },
    { name: "Aarti Mehta", date: "2025-07-12", status: "On Leave" },
  ]);
  // const [attendanceData, setAttendanceData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  // useEffect(() => {
  //   const getAttendance = async () => {
  //     try {
  //       const res = await fetchAttendance();
  //       setAttendanceData(res);
  //     } catch (err) {
  //       console.error("Error fetching attendance:", err);
  //     }
  //   };
  //   getAttendance();
  // }, []);

  const filteredData = attendanceData
    .filter((record) =>
      record.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "Date") return new Date(b.date) - new Date(a.date);
      if (sortBy === "Name") return a.name.localeCompare(b.name);
      return 0;
    });

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="w-full bg-blue-200 min-h-screen pt-16">
      <PageTitle pageTitle="Attendance" />

      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        <Button type="button" variant="primary">
          Mark Attendance
        </Button>

        <SearchBox onChange={handleSearch} placeholder="Search by name..." />

        <div className="w-[216px] h-[38px] rounded-[8px] bg-white flex items-center px-3 gap-2 shadow">
          <p className="text-gray-500">Sort By:</p>
          <select
            className="text-gray-700 bg-white outline-none"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="Newest">Newest</option>
            <option value="Date">Date</option>
            <option value="Name">Name</option>
          </select>
        </div>

        <Button variant="primary">Export</Button>
      </div>

      <div className="w-11/12 md:w-4/5 mx-auto bg-white rounded-2xl px-3 py-4 shadow-md">
        <div className="grid grid-cols-4 gap-4 text-center text-gray-500 font-semibold mb-2">
          <div>Sl. No.</div>
          <div>Employee Name</div>
          <div>Date</div>
          <div>Status</div>
        </div>

        {filteredData.length > 0 ? (
          filteredData.map((record, index) => (
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
          ))
        ) : (
          <div className="text-center text-gray-500 mt-8">
            No records found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;
