import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";

export default function ProcessDesign() {
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
                        <span className="text-gray-800 font-medium">Process Design</span>
                    </div>
                </nav>

                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Process Design</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Creating scalable, efficient systems that eliminate waste, reduce variation, and drive continuous improvement through proven methodologies.
                    </p>
                </header>

                {/* Service Overview */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Our Approach</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            At Alucentra, we combine the precision of Six Sigma with the efficiency of Lean methodologies to design
                            processes that deliver exceptional results. Our systematic approach focuses on eliminating waste, reducing
                            defects, and creating sustainable operational excellence that scales with your organization's growth.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h3 className="font-semibold mb-2">Data-Driven Design</h3>
                                <p className="text-sm text-gray-600">Evidence-based process optimization</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="font-semibold mb-2">Waste Elimination</h3>
                                <p className="text-sm text-gray-600">Lean principles for maximum efficiency</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="font-semibold mb-2">Quality Excellence</h3>
                                <p className="text-sm text-gray-600">Six Sigma for defect reduction</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Methodologies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-8 text-center">Our Proven Methodologies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center">
                                <span className="mr-2">σ</span> Six Sigma Excellence
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Rigorous, data-driven methodology focused on eliminating defects and reducing process variation
                                to achieve near-perfect quality outcomes.
                            </p>
                            <ul className="text-gray-600 space-y-2 text-sm">
                                <li>• DMAIC (Define, Measure, Analyze, Improve, Control)</li>
                                <li>• Statistical process control</li>
                                <li>• Root cause analysis</li>
                                <li>• Quality management systems</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                                <span className="mr-2">🏭</span> Lean Manufacturing
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Systematic approach to identifying and eliminating waste while maximizing customer value
                                through continuous flow and pull-based systems.
                            </p>
                            <ul className="text-gray-600 space-y-2 text-sm">
                                <li>• Value stream mapping</li>
                                <li>• 5S workplace organization</li>
                                <li>• Kaizen continuous improvement</li>
                                <li>• Just-in-time production</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Service Deliverables */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-8 text-center">What We Deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Process Mapping & Analysis</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Current state process documentation</li>
                                    <li>• Value stream mapping</li>
                                    <li>• Bottleneck identification</li>
                                    <li>• Waste analysis (7 wastes of Lean)</li>
                                    <li>• Process performance metrics</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Quality Management Systems</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Statistical process control</li>
                                    <li>• Quality control plans</li>
                                    <li>• Defect tracking systems</li>
                                    <li>• Control charts and dashboards</li>
                                    <li>• Standard operating procedures</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Workflow Optimization</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Future state process design</li>
                                    <li>• Automation recommendations</li>
                                    <li>• Resource allocation optimization</li>
                                    <li>• Cycle time reduction strategies</li>
                                    <li>• Capacity planning models</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Continuous Improvement Framework</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Kaizen event planning</li>
                                    <li>• Employee suggestion systems</li>
                                    <li>• Performance measurement systems</li>
                                    <li>• Training and certification programs</li>
                                    <li>• Sustainability planning</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Process Framework */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Our DMAIC Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <div className="text-center">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">D</div>
                                <h3 className="font-semibold mb-2">Define</h3>
                                <p className="text-sm text-gray-600">Identify problems and project scope</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">M</div>
                                <h3 className="font-semibold mb-2">Measure</h3>
                                <p className="text-sm text-gray-600">Collect data and establish baselines</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">A</div>
                                <h3 className="font-semibold mb-2">Analyze</h3>
                                <p className="text-sm text-gray-600">Identify root causes and opportunities</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">I</div>
                                <h3 className="font-semibold mb-2">Improve</h3>
                                <p className="text-sm text-gray-600">Implement solutions and optimize</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">C</div>
                                <h3 className="font-semibold mb-2">Control</h3>
                                <p className="text-sm text-gray-600">Monitor and sustain improvements</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Benefits of Our Process Design Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-green-700">Operational Excellence</h3>
                                <p className="text-gray-600 mb-4">
                                    Achieve significant improvements in efficiency, quality, and cost reduction through systematic
                                    process optimization and waste elimination.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• 25-50% reduction in cycle times</li>
                                    <li>• 90%+ defect reduction</li>
                                    <li>• 15-30% cost savings</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-green-700">Scalable Systems</h3>
                                <p className="text-gray-600 mb-4">
                                    Build robust processes that grow with your business while maintaining consistency
                                    and quality across all operations.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• Standardized procedures</li>
                                    <li>• Automated quality controls</li>
                                    <li>• Predictable outcomes</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-green-700">Employee Engagement</h3>
                                <p className="text-gray-600 mb-4">
                                    Empower your team with clear processes, continuous improvement mindset,
                                    and the tools to drive positive change.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• Increased job satisfaction</li>
                                    <li>• Reduced frustration</li>
                                    <li>• Innovation culture</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-green-700">Competitive Advantage</h3>
                                <p className="text-gray-600 mb-4">
                                    Gain market leadership through superior operational performance,
                                    faster delivery, and consistently high quality.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• Faster time-to-market</li>
                                    <li>• Higher customer satisfaction</li>
                                    <li>• Market differentiation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Applications */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Industry Applications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-indigo-700">Manufacturing</h3>
                                <p className="text-sm text-gray-600">Production line optimization, quality control, supply chain efficiency</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-indigo-700">Healthcare</h3>
                                <p className="text-sm text-gray-600">Patient flow, clinical processes, administrative efficiency</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-indigo-700">Financial Services</h3>
                                <p className="text-sm text-gray-600">Transaction processing, compliance workflows, customer onboarding</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-indigo-700">Technology</h3>
                                <p className="text-sm text-gray-600">Software development, deployment processes, support operations</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-indigo-700">Retail</h3>
                                <p className="text-sm text-gray-600">Inventory management, order fulfillment, customer service</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-indigo-700">Government</h3>
                                <p className="text-sm text-gray-600">Public service delivery, regulatory processes, citizen engagement</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Ready to Optimize Your Processes?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Let's discuss how our Process Design services can help you eliminate waste, improve quality,
                        and create sustainable operational excellence that drives business results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button className="w-full sm:w-auto">Start Your Journey</Button>
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
