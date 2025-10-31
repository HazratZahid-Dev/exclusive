"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Button from "../components/Button";

export default function SupabasePage() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    rollNumber: "",
    address: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false); // for submit button
  const [tableLoading, setTableLoading] = useState(true); // for initial data fetch loader
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    rollNo: "",
    grade: "",
    age: "",
  });

  // Fetch students
  const fetchStudents = async () => {
    setTableLoading(true);
    const { data, error } = await supabase.from("student").select("*");

    if (error) {
      console.error("Fetch error:", error);
    } else {
      const sorted = [...(data || [])].sort((a, b) => b.id - a.id);
      setStudents(sorted);
    }
    setTableLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const resetForm = () =>
    setFormData({ name: "", fatherName: "", rollNumber: "", address: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  // Add or Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name.trim(),
      fatherName: formData.fatherName.trim(),
      rollNumber: formData.rollNumber.trim(),
      address: formData.address.trim(),
    };

    // 🔹 Basic validation
    if (!payload.name || !payload.fatherName || !payload.rollNumber) {
      alert("Please fill name, father name, and roll number.");
      return;
    }

    // 🔹 Roll number must be numeric
    if (!/^\d+$/.test(payload.rollNumber)) {
      alert("Roll number must contain only digits!");
      return;
    }

    setLoading(true);

    if (editingId) {
      // 🔹 Update student
      const { data, error } = await supabase
        .from("student")
        .update(payload)
        .eq("id", editingId)
        .select();

      if (error) {
        console.error("Update error:", error);
        alert("Failed to update student.");
      } else {
        setStudents((prev) =>
          prev.map((s) => (s.id === editingId ? data[0] : s))
        );
        setEditingId(null);
        resetForm();
      }
    } else {
      // 🔹 Check if roll number already exists before inserting
      const { data: existing, error: checkError } = await supabase
        .from("student")
        .select("id")
        .eq("rollNumber", payload.rollNumber)
        .maybeSingle();

      if (checkError) {
        console.error("Check error:", checkError);
        alert("Error checking roll number. Please try again.");
        setLoading(false);
        return;
      }

      if (existing) {
        alert("Roll number already exists!");
        setLoading(false);
        return;
      }

      // 🔹 Insert new student
      const { data, error } = await supabase
        .from("student")
        .insert([payload])
        .select();

      if (error) {
        console.error("Insert error:", error);
        alert("Failed to add student.");
      } else {
        setStudents((prev) => [data[0], ...prev]);
        resetForm();
      }
    }

    setLoading(false);
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setFormData({
      name: student.name || "",
      fatherName: student.fatherName || "",
      rollNumber: student.rollNumber || "",
      address: student.address || "",
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    resetForm();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this student?")) return;
    setTableLoading(true);
    const { error } = await supabase.from("student").delete().eq("id", id);

    if (error) {
      console.error("Delete error:", error);
      alert("Failed to delete.");
    } else {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
    setTableLoading(false);
  };

  const fetchData = async () => {
    setTableLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/student");
      if (!res.ok) {
        throw new Error("Failed to fetch Data");
      }
      const data = await res.json();
      setData(data.students);
      setLoading(false);
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

    if (
      !form.name ||
      !form.fatherName ||
      !form.rollNo ||
      !form.grade ||
      !form.age
    ) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add student");

      setForm({ name: "", fatherName: "", rollNo: "", grade: "", age: "" });
      fetchData(); // refresh table
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="">
      <div className="flex items-start justify-between ">
        {/* Left: Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex flex-col items-start w-full px-12">
            <h1 className="text-xl font-semibold">
              {editingId ? "Edit Student" : "Enter Student Bio Data"}
            </h1>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-y-6 w-full"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b border-gray-300 placeholder-gray-500 p-0 outline-none"
                placeholder="Enter Student Name"
              />
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="border-b border-gray-300 placeholder-gray-500 p-0 outline-none"
                placeholder="Enter Student Father name"
              />
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className="border-b border-gray-300 placeholder-gray-500 p-0 outline-none"
                placeholder="Enter student Roll number"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border-b border-gray-300 placeholder-gray-500 p-0 outline-none"
                placeholder="Enter student address"
              />

              <div className="flex gap-3">
                <Button
                  btn_text={
                    editingId
                      ? loading
                        ? "Updating..."
                        : "Update Student"
                      : loading
                      ? "Adding..."
                      : "Add Student Info"
                  }
                  btn_height="h-12"
                  btn_width="w-[160px]"
                  btn_color="bg-[#BD4444]"
                  type="submit"
                />
                {editingId && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="h-12 px-4 rounded-sm border border-gray-300"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right: Table */}
        <div className="w-1/2 px-8">
          <h1 className="text-xl font-semibold mb-6">
            Student Information Table
          </h1>

          {tableLoading ? (
            <div className="flex justify-center items-center h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#BD4444]"></div>
            </div>
          ) : students.length === 0 ? (
            <p className="text-gray-500">No student data added yet.</p>
          ) : (
            <div className="overflow-auto max-h-[60vh]">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Father Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Roll No
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Address
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {student.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {student.fatherName}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {student.rollNumber}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {student.address}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 flex gap-2">
                        <button
                          onClick={() => handleEdit(student)}
                          className="px-2 py-1 text-sm border rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="px-2 py-1 text-sm border rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
