import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";

export default function App() {
  return (
    <Router>
      <nav className="bg-white shadow p-4 flex justify-center items-center space-x-8 text-lg font-medium">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Alucentra Logo" className="h-12 w-auto" style={{marginRight: '8px'}} />
        </Link>
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/services" className="hover:text-indigo-600">Services</Link>
  <Link to="/about" className="hover:text-indigo-600">About</Link>
        <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
      </nav>

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
