import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";

export default function ChangeManagement() {
    return (
        <div
            className="min-h-screen bg-cover bg-center text-gray-800 p-6"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1470&q=80')",
            }}
        >
            <div className="bg-white/70 backdrop-blur-sm max-w-4xl mx-auto rounded-xl p-8 mt-12">
                {/* Breadcrumb Navigation */}
                <nav className="mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link to="/" className="hover:text-indigo-600">Home</Link>
                        <span>›</span>
                        <Link to="/services" className="hover:text-indigo-600">Services</Link>
                        <span>›</span>
                        <span className="text-gray-800 font-medium">Change Management</span>
                    </div>
                </nav>

                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Change Management</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Empowering people, teams, and cultures to adapt and excel through structured, research-based methodologies that ensure successful transformation.
                    </p>
                </header>

                {/* Service Overview */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Our Approach</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            At Alucentra, we leverage PROSCI's evidence-based change management methodology and the proven ADKAR model
                            to guide individuals and organizations through successful transitions. Our structured approach addresses
                            both the technical and human sides of change, ensuring sustainable adoption and lasting results.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">👥</span>
                                </div>
                                <h3 className="font-semibold mb-2">People-Centric</h3>
                                <p className="text-sm text-gray-600">Focus on individual adoption and engagement</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">📈</span>
                                </div>
                                <h3 className="font-semibold mb-2">Evidence-Based</h3>
                                <p className="text-sm text-gray-600">PROSCI research with 5,000+ organizations</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🔄</span>
                                </div>
                                <h3 className="font-semibold mb-2">Sustainable Results</h3>
                                <p className="text-sm text-gray-600">Long-term adoption and capability building</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROSCI Credibility */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Why PROSCI?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-purple-700">Research Foundation</h3>
                                <ul className="text-gray-700 space-y-2">
                                    <li>• <strong>25+ years</strong> of change management research</li>
                                    <li>• <strong>5,000+ organizations</strong> studied globally</li>
                                    <li>• <strong>6x more likely</strong> to meet objectives with structured change management</li>
                                    <li>• <strong>143% ROI</strong> average return on change management investment</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-purple-700">Global Recognition</h3>
                                <ul className="text-gray-700 space-y-2">
                                    <li>• <strong>190+ countries</strong> using PROSCI methodology</li>
                                    <li>• <strong>Fortune 500</strong> companies trust PROSCI</li>
                                    <li>• <strong>1 million+</strong> professionals trained worldwide</li>
                                    <li>• <strong>Top-rated</strong> change management certification</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ADKAR Model */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-8 text-center">The ADKAR Model</h2>
                    <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                        PROSCI's ADKAR model addresses the five key elements individuals need to change successfully.
                        Each element builds upon the previous to ensure complete transformation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div className="text-center">
                            <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-lg">A</div>
                            <h3 className="font-semibold mb-2">Awareness</h3>
                            <p className="text-sm text-gray-600">Understanding why change is needed</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-lg">D</div>
                            <h3 className="font-semibold mb-2">Desire</h3>
                            <p className="text-sm text-gray-600">Personal motivation to support change</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-lg">K</div>
                            <h3 className="font-semibold mb-2">Knowledge</h3>
                            <p className="text-sm text-gray-600">Skills and information to change</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-lg">A</div>
                            <h3 className="font-semibold mb-2">Ability</h3>
                            <p className="text-sm text-gray-600">Demonstrated skills and behaviors</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-lg">R</div>
                            <h3 className="font-semibold mb-2">Reinforcement</h3>
                            <p className="text-sm text-gray-600">Sustaining the change over time</p>
                        </div>
                    </div>
                </section>

                {/* Service Deliverables */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-8 text-center">What We Deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-purple-700">Change Strategy & Planning</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Change management strategy development</li>
                                    <li>• Stakeholder impact assessment</li>
                                    <li>• Change readiness evaluation</li>
                                    <li>• Risk and resistance analysis</li>
                                    <li>• ADKAR assessment tools</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-purple-700">Communication & Engagement</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Targeted communication strategies</li>
                                    <li>• Stakeholder engagement plans</li>
                                    <li>• Change champion networks</li>
                                    <li>• Feedback and pulse surveys</li>
                                    <li>• Town halls and workshops</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-purple-700">Training & Development</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Skills gap analysis</li>
                                    <li>• Training program design</li>
                                    <li>• Learning management systems</li>
                                    <li>• Manager and leader coaching</li>
                                    <li>• Performance support tools</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-purple-700">Reinforcement & Sustainability</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Performance measurement systems</li>
                                    <li>• Recognition and rewards programs</li>
                                    <li>• Continuous improvement processes</li>
                                    <li>• Change capability building</li>
                                    <li>• Lessons learned documentation</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Benefits */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Benefits of Structured Change Management</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-purple-700">Higher Success Rates</h3>
                                <p className="text-gray-600 mb-4">
                                    Organizations with excellent change management are 6x more likely to meet project objectives
                                    and achieve desired outcomes on time and within budget.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• 95% project success rate with excellent change management</li>
                                    <li>• 16% success rate without change management</li>
                                    <li>• 2.3x faster adoption of changes</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-purple-700">Reduced Resistance</h3>
                                <p className="text-gray-600 mb-4">
                                    Proactive change management reduces employee resistance and increases engagement,
                                    leading to smoother transitions and faster realization of benefits.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• 70% reduction in change resistance</li>
                                    <li>• 80% higher employee engagement</li>
                                    <li>• 50% faster time to competency</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-purple-700">Financial Returns</h3>
                                <p className="text-gray-600 mb-4">
                                    Effective change management delivers measurable financial returns through improved adoption,
                                    reduced implementation costs, and faster benefit realization.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• 143% average ROI on change management</li>
                                    <li>• $30 saved for every $1 invested</li>
                                    <li>• 25% faster benefit realization</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-purple-700">Organizational Capability</h3>
                                <p className="text-gray-600 mb-4">
                                    Building internal change management capabilities creates a competitive advantage
                                    and prepares organizations for future transformations.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• Improved change agility</li>
                                    <li>• Enhanced leadership skills</li>
                                    <li>• Stronger organizational resilience</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application Areas */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Change Management Applications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-purple-700">Digital Transformation</h3>
                                <p className="text-sm text-gray-600">Technology adoption, process digitization, cultural shift to digital-first mindset</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-purple-700">Organizational Restructuring</h3>
                                <p className="text-sm text-gray-600">Mergers & acquisitions, reorganizations, role changes, reporting structures</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-purple-700">Process Improvements</h3>
                                <p className="text-sm text-gray-600">Workflow changes, system implementations, quality initiatives, automation</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-purple-700">Cultural Transformation</h3>
                                <p className="text-sm text-gray-600">Values alignment, behavioral changes, leadership development, team dynamics</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-purple-700">Strategic Initiatives</h3>
                                <p className="text-sm text-gray-600">Business model changes, market expansion, product launches, operational excellence</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-purple-700">Regulatory Compliance</h3>
                                <p className="text-sm text-gray-600">Policy changes, compliance requirements, industry regulations, audit preparations</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Ready to Lead Successful Change?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Let's discuss how our PROSCI-certified change management approach can help you navigate transformation,
                        engage your people, and achieve lasting results that stick.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button className="w-full sm:w-auto">Transform with Confidence</Button>
                        </Link>
                        <Link to="/services">
                            <Button className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700">
                                View All Services
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
