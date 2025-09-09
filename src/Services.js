import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-800 p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm max-w-3xl mx-auto rounded-xl p-8 mt-12">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Alucentra Consulting offers a range of services to help organizations transform and thrive.
          </p>
        </header>
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/services/strategy" className="block">
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer border-2 border-transparent hover:border-indigo-200">
              <h2 className="text-xl font-semibold mb-2 text-indigo-700">Strategy & Transformation</h2>
              <p className="text-gray-600 mb-3">
                Guiding organizations through change with clarity, purpose, and actionable strategies.
              </p>
              <div className="text-indigo-600 text-sm font-medium flex items-center">
                Learn More
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>
          <Link to="/services/process-design" className="block">
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer border-2 border-transparent hover:border-green-200">
              <h2 className="text-xl font-semibold mb-2 text-green-700">Process Design</h2>
              <p className="text-gray-600 mb-3">
                Creating scalable, efficient systems that support innovation and growth.
              </p>
              <div className="text-green-600 text-sm font-medium flex items-center">
                Learn More
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Change Management</h2>
            <p className="text-gray-600">
              Empowering people, teams, and cultures to adapt and excel in evolving environments.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Consulting & Advisory</h2>
            <p className="text-gray-600">
              Providing expert advice and support tailored to your unique challenges and goals.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
