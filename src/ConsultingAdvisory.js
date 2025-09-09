import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";

export default function ConsultingAdvisory() {
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
                        <span className="text-gray-800 font-medium">Consulting & Advisory</span>
                    </div>
                </nav>

                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Consulting & Advisory</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Strategic expertise and trusted guidance to navigate complex challenges, optimize performance,
                        and drive sustainable growth through data-driven insights and proven methodologies.
                    </p>
                </header>

                {/* Service Overview */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-orange-700">Our Approach</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Our consulting and advisory services combine deep industry expertise with analytical rigor
                            to deliver actionable strategies and sustainable solutions. We partner with leadership teams
                            to tackle their most pressing challenges and unlock new opportunities for growth and innovation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="font-semibold mb-2">Strategic Focus</h3>
                                <p className="text-sm text-gray-600">Long-term vision aligned with immediate actions</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h3 className="font-semibold mb-2">Data-Driven</h3>
                                <p className="text-sm text-gray-600">Evidence-based recommendations and insights</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <h3 className="font-semibold mb-2">Collaborative</h3>
                                <p className="text-sm text-gray-600">Partnership approach with knowledge transfer</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Service Areas */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-8 text-center">Core Service Areas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-3 text-orange-700">Strategic Planning</h3>
                            <p className="text-gray-600 mb-4">
                                Comprehensive strategic planning services that align vision, mission, and objectives
                                with actionable roadmaps for sustainable growth and competitive advantage.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Strategic visioning and goal setting</li>
                                <li>• Market analysis and competitive positioning</li>
                                <li>• SWOT analysis and scenario planning</li>
                                <li>• Strategic roadmap development</li>
                                <li>• Implementation planning and monitoring</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-3 text-blue-700">Project Portfolio Management</h3>
                            <p className="text-gray-600 mb-4">
                                Optimize project portfolios to maximize value delivery, resource utilization,
                                and strategic alignment across your organization's initiatives.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Portfolio assessment and optimization</li>
                                <li>• Project prioritization frameworks</li>
                                <li>• Resource allocation strategies</li>
                                <li>• PMO establishment and enhancement</li>
                                <li>• Portfolio governance and reporting</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-3 text-purple-700">Executive & Board Presentations</h3>
                            <p className="text-gray-600 mb-4">
                                High-impact presentations and strategic communications that engage leadership,
                                drive decision-making, and secure stakeholder buy-in for critical initiatives.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Executive briefing materials</li>
                                <li>• Board presentation development</li>
                                <li>• Strategic communication frameworks</li>
                                <li>• Data visualization and storytelling</li>
                                <li>• Stakeholder engagement strategies</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-3 text-green-700">Organizational Development</h3>
                            <p className="text-gray-600 mb-4">
                                Build organizational capabilities, enhance performance, and create sustainable
                                competitive advantages through structured development programs.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Organizational design and restructuring</li>
                                <li>• Leadership development programs</li>
                                <li>• Performance management systems</li>
                                <li>• Culture assessment and development</li>
                                <li>• Capability building initiatives</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Specialized Advisory Services */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Specialized Advisory Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-gray-100 rounded-lg p-4 mb-3">
                                    <h3 className="font-semibold text-gray-700">Risk Management</h3>
                                </div>
                                <p className="text-sm text-gray-600">Enterprise risk assessment, mitigation strategies, and governance frameworks</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-100 rounded-lg p-4 mb-3">
                                    <h3 className="font-semibold text-gray-700">Performance Analytics</h3>
                                </div>
                                <p className="text-sm text-gray-600">KPI development, dashboard design, and performance measurement systems</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-100 rounded-lg p-4 mb-3">
                                    <h3 className="font-semibold text-gray-700">Due Diligence</h3>
                                </div>
                                <p className="text-sm text-gray-600">M&A support, investment analysis, and strategic partnership evaluation</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-100 rounded-lg p-4 mb-3">
                                    <h3 className="font-semibold text-gray-700">Market Research</h3>
                                </div>
                                <p className="text-sm text-gray-600">Industry analysis, customer insights, and competitive intelligence</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-100 rounded-lg p-4 mb-3">
                                    <h3 className="font-semibold text-gray-700">Business Modeling</h3>
                                </div>
                                <p className="text-sm text-gray-600">Financial modeling, scenario analysis, and business case development</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-100 rounded-lg p-4 mb-3">
                                    <h3 className="font-semibold text-gray-700">Interim Leadership</h3>
                                </div>
                                <p className="text-sm text-gray-600">Executive interim roles, crisis management, and transformation leadership</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Deliverables */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-8 text-center">What We Deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">Strategic Assessments</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Current state analysis and gap assessment</li>
                                    <li>• Market and competitive landscape review</li>
                                    <li>• Organizational maturity evaluation</li>
                                    <li>• Risk and opportunity identification</li>
                                    <li>• Strategic options evaluation</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">Strategic Plans & Roadmaps</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Multi-year strategic plans</li>
                                    <li>• Implementation roadmaps with milestones</li>
                                    <li>• Resource allocation frameworks</li>
                                    <li>• Performance measurement systems</li>
                                    <li>• Risk mitigation strategies</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">Governance & Frameworks</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Decision-making frameworks</li>
                                    <li>• Portfolio governance structures</li>
                                    <li>• Performance monitoring dashboards</li>
                                    <li>• Policy and procedure documentation</li>
                                    <li>• Stakeholder engagement models</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="max-w-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">Capacity Building</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Leadership development programs</li>
                                    <li>• Skills transfer and training</li>
                                    <li>• Best practice documentation</li>
                                    <li>• Tools and template libraries</li>
                                    <li>• Ongoing support and coaching</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Benefits */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Benefits of Professional Advisory Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">Strategic Clarity</h3>
                                <p className="text-gray-600 mb-4">
                                    Gain clear direction and alignment on strategic priorities, enabling focused
                                    decision-making and resource allocation for maximum impact.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• 40% improvement in strategic alignment</li>
                                    <li>• 60% faster decision-making processes</li>
                                    <li>• 35% better resource utilization</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">Enhanced Performance</h3>
                                <p className="text-gray-600 mb-4">
                                    Optimize organizational performance through data-driven insights, best practices,
                                    and proven methodologies that deliver measurable results.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• 25% average performance improvement</li>
                                    <li>• 50% reduction in execution risks</li>
                                    <li>• 30% faster time-to-market</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">Risk Mitigation</h3>
                                <p className="text-gray-600 mb-4">
                                    Identify and address potential risks early through comprehensive assessments
                                    and proactive mitigation strategies that protect business value.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• 70% reduction in project failures</li>
                                    <li>• 45% improvement in risk identification</li>
                                    <li>• 80% better crisis preparedness</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">Competitive Advantage</h3>
                                <p className="text-gray-600 mb-4">
                                    Build sustainable competitive advantages through strategic positioning,
                                    operational excellence, and continuous innovation capabilities.
                                </p>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>• Enhanced market positioning</li>
                                    <li>• Improved innovation capacity</li>
                                    <li>• Stronger stakeholder relationships</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Applications */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Industry Applications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-orange-700">Financial Services</h3>
                                <p className="text-sm text-gray-600">Regulatory compliance, digital banking transformation, risk management frameworks</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-orange-700">Healthcare</h3>
                                <p className="text-sm text-gray-600">Operational efficiency, quality improvement, regulatory compliance, digital health</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-orange-700">Manufacturing</h3>
                                <p className="text-sm text-gray-600">Operational excellence, supply chain optimization, Industry 4.0 transformation</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-orange-700">Technology</h3>
                                <p className="text-sm text-gray-600">Product strategy, market expansion, agile transformation, innovation management</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-orange-700">Energy & Utilities</h3>
                                <p className="text-sm text-gray-600">Sustainability initiatives, regulatory adaptation, infrastructure modernization</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold mb-2 text-orange-700">Government & Public Sector</h3>
                                <p className="text-sm text-gray-600">Service delivery optimization, citizen engagement, digital government initiatives</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Ready to Accelerate Your Success?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Partner with our experienced consultants to unlock new opportunities, optimize performance,
                        and navigate complex challenges with confidence and strategic clarity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button className="w-full sm:w-auto">Start Your Strategic Journey</Button>
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
