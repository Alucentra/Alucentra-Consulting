import React from "react";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-800 p-4 sm:p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm max-w-6xl mx-auto rounded-xl p-4 sm:p-6 lg:p-8 mt-6 sm:mt-12">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 px-2">
            Alucentra Consulting
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto px-4">
            Illuminating transformation through clarity, insight, and operational excellence.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="rounded-2xl shadow-md p-4">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">
                  Strategy & Transformation
                </h2>
                <p className="text-gray-600">
                  Helping organizations navigate change with clarity and purpose.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="rounded-2xl shadow-md p-4">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">Process Design</h2>
                <p className="text-gray-600">
                  Designing systems that scale, simplify, and support innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="rounded-2xl shadow-md p-4">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">Change Management</h2>
                <p className="text-gray-600">
                  Enabling people, teams, and culture to adapt and thrive.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </main>

        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Illuminate Change?</h3>
          <p className="text-gray-600 mb-6">
            Let’s talk about how Alucentra can help you navigate complex transformation challenges.
          </p>
          <Link to="/contact">
            <Button className="rounded-xl px-6 py-3 text-lg">Contact Us</Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
