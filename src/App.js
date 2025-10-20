import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Strategy from "./Strategy";
import ProcessDesign from "./ProcessDesign";
import ChangeManagement from "./ChangeManagement";
import ConsultingAdvisory from "./ConsultingAdvisory";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Router>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16 relative">
            {/* Logo and Navigation Container - Centered */}
            <div className="flex items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center mr-6 lg:mr-8" onClick={closeMobileMenu}>
                <img src="/logo.png" alt="Alucentra Logo" className="h-8 sm:h-10 w-auto" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200">
                  Home
                </Link>
                <Link to="/services" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200">
                  Services
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button - Positioned absolute right */}
            <div className="md:hidden absolute right-4">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-3 rounded-md text-gray-900 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
                aria-expanded={mobileMenuOpen}
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} w-7 h-7`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} w-7 h-7`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 bg-white">
              <Link
                to="/"
                className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/strategy" element={<Strategy />} />
        <Route path="/services/process-design" element={<ProcessDesign />} />
        <Route path="/services/change-management" element={<ChangeManagement />} />
        <Route path="/services/consulting-advisory" element={<ConsultingAdvisory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
