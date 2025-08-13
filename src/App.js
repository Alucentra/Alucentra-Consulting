import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <nav className="bg-white shadow p-4 flex justify-center space-x-8 text-lg font-medium">
        <Link to="/" className="hover:text-indigo-600">
          Home
        </Link>
        <Link to="/contact" className="hover:text-indigo-600">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
