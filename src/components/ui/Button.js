import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white rounded-xl px-6 py-3 text-lg hover:bg-blue-700 transition-colors duration-200 ${className}`}
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );
}
