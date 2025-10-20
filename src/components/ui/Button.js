import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white rounded-xl px-4 sm:px-6 py-3 text-base sm:text-lg hover:bg-blue-700 transition-colors duration-200 min-h-[44px] ${className}`}
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );
}
