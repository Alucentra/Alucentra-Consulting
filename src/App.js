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

// Add CSS for mobile menu visibility
const mobileMenuStyles = `
  @media (min-width: 768px) {
    .mobile-menu-button {
      display: none !important;
    }
  }
  @media (max-width: 767px) {
    .mobile-menu-button {
      display: block !important;
    }
  }
  .hamburger-btn:hover {
    background-color: #f3f4f6 !important;
    border-color: #1f2937 !important;
  }
`;

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
      <style dangerouslySetInnerHTML={{ __html: mobileMenuStyles }} />
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

            {/* Mobile menu button - Always visible with media query */}
            <div
              className="mobile-menu-button"
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'block'
              }}
            >
              <button
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                className="hamburger-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  border: '2px solid #374151',
                  color: '#1f2937',
                  cursor: 'pointer',
                  minWidth: '48px',
                  minHeight: '48px',
                  zIndex: 1000,
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  outline: 'none'
                }}
              >
                <span className="sr-only">Open main menu</span>
                {/* Simple hamburger lines - more reliable than SVG */}
                <div style={{ display: mobileMenuOpen ? 'none' : 'block' }}>
                  <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#1f2937', margin: '3px 0', transition: 'all 0.3s' }}></span>
                  <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#1f2937', margin: '3px 0', transition: 'all 0.3s' }}></span>
                  <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#1f2937', margin: '3px 0', transition: 'all 0.3s' }}></span>
                </div>
                {/* X icon */}
                <div style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>✕</span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
            style={{ display: mobileMenuOpen ? 'block' : 'none' }}
          >
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
