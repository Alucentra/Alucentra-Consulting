import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white bg-opacity-70 rounded-2xl shadow-md p-4 max-w-sm mx-auto ${className}`}
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-gray-700 ${className}`}>{children}</div>;
}
