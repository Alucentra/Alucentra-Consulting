import React from "react";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-800 p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm max-w-2xl mx-auto rounded-xl p-8 mt-12">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Alucentra Consulting is dedicated to illuminating transformation through clarity, insight, and operational excellence. Our team brings deep expertise in strategy, process design, and change management to help organizations thrive in a rapidly evolving world.
          </p>
        </header>
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To empower organizations and individuals to achieve their highest potential by providing expert guidance, innovative solutions, and unwavering support.
          </p>
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Clarity</li>
            <li>Insight</li>
            <li>Excellence</li>
            <li>Integrity</li>
            <li>Collaboration</li>
          </ul>
          <div className="mt-6 text-gray-700 text-base">
            <strong>What does "Alucentra" mean?</strong><br />
            <span>
              <b>Alu</b> - Pragmatic with a Focus on Excellence<br />
              <b>Lucent</b> - Illuminating Opportunities with Clarity & Insights<br />
              <b>Central</b> - Collaborating at the Center with Integrity<br />
              The name "Alucentra" embodies our commitment to pragmatism, illuminating opportunities, clarity, insight, and collaborating at the center with integrity in everything we do.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
