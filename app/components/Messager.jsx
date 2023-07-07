import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function MessageOverlay({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        isVisible ? "" : "hidden"
      }`}
    >
      {isVisible && (
        <div className="bg-white p-4 rounded shadow-md flex items-center justify-between">
          <p>{message}</p>
          <button onClick={handleClose} className="text-red-500">
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
}
