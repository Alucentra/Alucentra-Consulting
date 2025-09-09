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
            Alucentra Consulting is led by a proven executive with over 25 years of experience in operations, strategic planning, and digital transformation for businesses valued between $2B-$150B. We specialize in illuminating transformation through clarity, insight, and operational excellence.
          </p>
        </header>
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Leadership Experience</h2>
          <p className="text-gray-600 mb-4">
            Our founder brings proven executive leadership with expertise in business transformation, process design, product management, change management, innovation, and consulting. Strong leadership competencies include team mentoring, service delivery, and Six Sigma & Lean methodologies.
          </p>

          <h2 className="text-xl font-semibold mb-2">Key Achievements</h2>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li>Led transformation of $100M internally developed mobile app with 150K active associates</li>
            <li>Built product management team that earned Platinum TITAN Business Award in 2023</li>
            <li>Achieved 1M mobile downloads and $500M in digital orders through JobStack app</li>
            <li>Managed teams of 40+ people with multi-million dollar operating budgets</li>
            <li>Increased 3-year profitability by $200M through innovative billing solutions</li>
            <li>Led Six Sigma projects resulting in $2M+ savings</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To empower organizations and individuals to achieve their highest potential by providing expert guidance, innovative solutions, and unwavering support based on proven methodologies and real-world experience.
          </p>

          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Clarity in communication and strategy</li>
            <li>Insight driven by data and experience</li>
            <li>Excellence in service delivery</li>
            <li>Integrity in all relationships</li>
            <li>Collaboration at the center of transformation</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Industry Experience</h2>
          <p className="text-gray-600 mb-3">
            With extensive experience across multiple high-growth and established industries, we understand the unique challenges and opportunities in each sector:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 mb-6">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Staffing & Workforce Solutions</strong> (TrueBlue Inc. - $2B+ revenue)</li>
              <li><strong>Telecommunications</strong> (T-Mobile US - $1.2B business unit)</li>
              <li><strong>Financial Services & Banking</strong> (Washington Mutual Bank)</li>
              <li><strong>Professional Services & Consulting</strong> (Deloitte, Matisia)</li>
              <li><strong>Healthcare & Life Sciences</strong> (consulting projects)</li>
              <li><strong>Technology & Digital Transformation</strong> (mobile apps, enterprise systems)</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Risk Management & Compliance</strong></li>
              <li><strong>Product Management & Development</strong></li>
              <li><strong>Process Optimization & Lean</strong></li>
              <li><strong>Change Management & Transformation</strong></li>
              <li><strong>Strategic Planning & Operations</strong></li>
              <li><strong>Digital Innovation & Mobile Technology</strong></li>
            </ul>
          </div>
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
