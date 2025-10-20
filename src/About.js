import React from "react";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-800 p-4 sm:p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm max-w-4xl mx-auto rounded-xl p-4 sm:p-6 lg:p-8 mt-6 sm:mt-12">
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2">About Us</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto px-4">
            Alucentra Consulting is led by a proven executive with over 25 years of experience in operations, strategic planning, and digital transformation for businesses valued between $2B-$150B. We specialize in illuminating transformation through clarity, insight, and operational excellence.
          </p>
        </header>
        <section className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Leadership Experience Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200 border-2 border-transparent hover:border-indigo-200">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-indigo-600 font-bold text-lg">🎯</span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-indigo-700">Leadership Experience</h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Our founder brings proven executive leadership with expertise in business transformation, process design, product management, change management, innovation, and consulting. Strong leadership competencies include team mentoring, service delivery, and Six Sigma & Lean methodologies.
            </p>
          </div>

          {/* Key Achievements Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200 border-2 border-transparent hover:border-green-200">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-green-600 font-bold text-lg">🏆</span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-green-700">Key Achievements</h2>
            </div>
            <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Led transformation of $100M mobile app with 150K active associates
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Built product team earning Platinum TITAN Business Award in 2023
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Achieved 1M mobile downloads and $500M in digital orders
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Managed teams of 40+ people with multi-million dollar budgets
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Increased 3-year profitability by $200M through innovation
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                Led Six Sigma projects resulting in $2M+ savings
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200 border-2 border-transparent hover:border-purple-200">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold text-lg">🚀</span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-purple-700">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              To empower organizations and individuals to achieve their highest potential by providing expert guidance, innovative solutions, and unwavering support based on proven methodologies and real-world experience.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200 border-2 border-transparent hover:border-orange-200">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-orange-600 font-bold text-lg">💎</span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-orange-700">Our Values</h2>
            </div>
            <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                Clarity in communication and strategy
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                Insight driven by data and experience
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                Excellence in service delivery
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                Integrity in all relationships
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                Collaboration at the center of transformation
              </li>
            </ul>
          </div>
        </section>

        {/* Industry Experience Section */}
        <section className="mt-6 sm:mt-8">
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200 border-2 border-transparent hover:border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold text-lg">🏢</span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700">Industry Experience</h2>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              With extensive experience across multiple high-growth and established industries, we understand the unique challenges and opportunities in each sector:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Staffing & Workforce Solutions</strong> (TrueBlue Inc. - $2B+ revenue)</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Telecommunications</strong> (T-Mobile US - $1.2B business unit)</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Financial Services & Banking</strong> (Washington Mutual Bank)</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Professional Services & Consulting</strong> (Deloitte, Matisia)</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Healthcare & Life Sciences</strong> (consulting projects)</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Technology & Digital Transformation</strong> (mobile apps, enterprise systems)</div>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Risk Management & Compliance</strong></div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Product Management & Development</strong></div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Process Optimization & Lean</strong></div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Change Management & Transformation</strong></div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Strategic Planning & Operations</strong></div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div><strong>Digital Innovation & Mobile Technology</strong></div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Alucentra Meaning Section */}
        <section className="mt-6 sm:mt-8">
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200 border-2 border-transparent hover:border-teal-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-teal-600 font-bold text-lg">✨</span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-teal-700">What does "Alucentra" mean?</h2>
            </div>
            <div className="text-gray-700 text-sm sm:text-base space-y-3">
              <div className="flex items-start">
                <div className="w-16 text-teal-600 font-bold mr-2">Alu:</div>
                <div>Pragmatic with a Focus on Excellence</div>
              </div>
              <div className="flex items-start">
                <div className="w-16 text-teal-600 font-bold mr-2">Lucent:</div>
                <div>Illuminating Opportunities with Clarity & Insights</div>
              </div>
              <div className="flex items-start">
                <div className="w-16 text-teal-600 font-bold mr-2">Central:</div>
                <div>Collaborating at the Center with Integrity</div>
              </div>
              <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                <p className="text-gray-700 text-sm sm:text-base italic">
                  The name "Alucentra" embodies our commitment to pragmatism, illuminating opportunities, clarity, insight, and collaborating at the center with integrity in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
