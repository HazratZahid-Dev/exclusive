"use client";

import { useEffect, useState } from "react";

export default function SupabasePage() {
  const [editingId, setEditingId] = useState(null);
  const [tableLoading, setTableLoading] = useState(true); // for initial data fetch loader
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    rollNo: "",
    grade: "",
    age: "",
  });

  const fetchData = async () => {
    setTableLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/student");
      if (!res.ok) {
        throw new Error("Failed to fetch Data");
      }
      const data = await res.json();
      setData(data.students.students);
    } catch (error) {
      console.error("Error Fetching data:", error);
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStudentChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Add new student
  const handleStudentSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (editingId) {
        // 👇 Update existing student
        res = await fetch(`http://localhost:5000/api/student/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        // 👇 Add new student
        res = await fetch("http://localhost:5000/api/student", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }

      const data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        throw new Error(data.message || "Failed to save student");
      }

      // Reset form + refresh table
      setForm({ name: "", fatherName: "", rollNo: "", grade: "", age: "" });
      setEditingId(null);
      fetchData();
    } catch (error) {
      console.error("Save student error:", error);
    }
  };
  const handleEdit = (student) => {
    setForm({
      name: student.name,
      fatherName: student.fatherName,
      rollNo: student.rollNo,
      grade: student.grade,
      age: student.age,
    });
    setEditingId(student._id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/student/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setData(data.filter((student) => student._id !== id));
      } else {
        console.error("Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="">
      <div className="flex gap-x-12 justify-between px-8 py-20">
        {/* Form */}
        <div className="w-1/2">
          <form
            onSubmit={handleStudentSubmit}
            className="flex flex-col space-y-3"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleStudentChange}
              placeholder="Name"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="fatherName"
              value={form.fatherName}
              onChange={handleStudentChange}
              placeholder="Father Name"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="rollNo"
              value={form.rollNo}
              onChange={handleStudentChange}
              placeholder="Roll No"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="grade"
              value={form.grade}
              onChange={handleStudentChange}
              placeholder="Grade"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleStudentChange}
              placeholder="Age"
              className="p-2 border rounded"
            />

            <button
              type="submit"
              className={`col-span-5 text-white p-2 rounded ${
                editingId
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {editingId ? "Update Student" : "Add Student"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm({
                    name: "",
                    fatherName: "",
                    rollNo: "",
                    grade: "",
                    age: "",
                  });
                }}
                className="bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {/* Table */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">Student List</h2>

          {tableLoading ? (
            <p>Loading...</p>
          ) : (
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Father Name</th>
                  <th className="p-2 border">Roll No</th>
                  <th className="p-2 border">Grade</th>
                  <th className="p-2 border">Age</th>
                  <th className="p-2 border text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((student) => (
                    <tr key={student._id}>
                      <td className="p-2 border">{student.name}</td>
                      <td className="p-2 border">{student.fatherName}</td>
                      <td className="p-2 border">{student.rollNo}</td>
                      <td className="p-2 border">{student.grade}</td>
                      <td className="p-2 border">{student.age}</td>
                      <td className="p-2 border text-center space-x-2">
                        <button
                          onClick={() => handleEdit(student)}
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(student._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-gray-500">
                      No students found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
