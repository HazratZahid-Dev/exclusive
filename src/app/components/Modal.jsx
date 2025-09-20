import { useState, useRef, useEffect } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Modal Box */}
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-xl shadow-lg w-80 text-center"
          >
            <h2 className="text-lg font-semibold mb-4">Custom Modal</h2>
            <p className="text-gray-600 mb-6">
              This is a simple custom modal with an outside click to close.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
