"use client";
import { useRef, useEffect } from "react";

export default function Modal({ isOpen, onClose, onConfirm, loading }) {
  const modalRef = useRef(null);

  // Close when clicking outside modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-xl shadow-lg w-80 text-center"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Confirm Logout
        </h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to log out of your account?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50"
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}
