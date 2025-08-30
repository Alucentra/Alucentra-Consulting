import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";

export default function Strategy() {
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
                        <span className="text-gray-800 font-medium">Strategy & Transformation</span>
                    </div>
                </nav>

                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Strategy & Transformation</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Guiding organizations through complex change with clarity, purpose, and actionable strategies that drive sustainable transformation.
                    </p>
                </header>

                {/* Service Overview */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Our Approach</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            At Alucentra, we believe that successful transformation begins with a clear understanding of where you are,
                            where you want to go, and the strategic path to get there. Our Strategy & Transformation services provide
                            the roadmap and guidance needed to navigate complex organizational change while maintaining operational excellence.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="font-semibold mb-2">Strategic Clarity</h3>
                                <p className="text-sm text-gray-600">Define clear vision and objectives</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🗺️</span>
                                </div>
                                <h3 className="font-semibold mb-2">Transformation Roadmap</h3>
                                <p className="text-sm text-gray-600">Step-by-step implementation plan</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="font-semibold mb-2">Sustainable Results</h3>
                                <p className="text-sm text-gray-600">Long-term organizational impact</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Areas */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-8 text-center">What We Deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Digital Transformation Strategy</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Technology roadmap development</li>
                                    <li>• Digital capability assessment</li>
                                    <li>• Implementation planning</li>
                                    <li>• Change impact analysis</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Organizational Restructuring</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Organizational design optimization</li>
                                    <li>• Role and responsibility mapping</li>
                                    <li>• Governance framework development</li>
                                    <li>• Communication strategy</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Strategic Planning</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Vision and mission alignment</li>
                                    <li>• Market analysis and positioning</li>
                                    <li>• Goal setting and KPI development</li>
                                    <li>• Resource allocation planning</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Culture Transformation</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Cultural assessment and analysis</li>
                                    <li>• Values alignment initiatives</li>
                                    <li>• Leadership development programs</li>
                                    <li>• Employee engagement strategies</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Process */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Our Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                                <h3 className="font-semibold mb-2">Assess</h3>
                                <p className="text-sm text-gray-600">Current state analysis and opportunity identification</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                                <h3 className="font-semibold mb-2">Design</h3>
                                <p className="text-sm text-gray-600">Strategy development and transformation blueprint</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                                <h3 className="font-semibold mb-2">Implement</h3>
                                <p className="text-sm text-gray-600">Phased execution with continuous monitoring</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                                <h3 className="font-semibold mb-2">Sustain</h3>
                                <p className="text-sm text-gray-600">Embedding changes and measuring success</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Alucentra for Strategy & Transformation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Proven Methodology</h3>
                                <p className="text-gray-600 mb-4">
                                    Our structured approach combines industry best practices with innovative thinking to deliver
                                    transformation strategies that work in the real world.
                                </p>
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Cross-Industry Experience</h3>
                                <p className="text-gray-600">
                                    We bring insights from multiple industries, allowing us to apply successful strategies
                                    and avoid common pitfalls across different organizational contexts.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Collaborative Partnership</h3>
                                <p className="text-gray-600 mb-4">
                                    We work alongside your team as true partners, building internal capabilities while
                                    delivering external expertise for sustainable long-term success.
                                </p>
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Measurable Results</h3>
                                <p className="text-gray-600">
                                    Every transformation initiative includes clear success metrics and regular progress
                                    reviews to ensure we're delivering tangible business value.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Organization?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Let's discuss how our Strategy & Transformation services can help you navigate change,
                        achieve your strategic objectives, and build a more resilient organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button className="w-full sm:w-auto">Get Started Today</Button>
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
