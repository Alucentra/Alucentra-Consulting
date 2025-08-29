
import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/xovwpakl", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    setLoading(false);
    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("There was a problem submitting your form. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-800 p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm max-w-6xl mx-auto rounded-xl p-8 mt-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Alucentra</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            We'd love to hear from you! Fill out the form below and we'll get back to you soon.
          </p>
        </header>

        <main className="flex justify-center mb-12">
          <Card className="rounded-2xl shadow-md p-4 w-full max-w-xl">
            <CardContent>
              {submitted ? (
                <p className="text-green-600 text-lg text-center">
                  ✅ Thank you for reaching out! We'll get back to you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      className="border mt-1 p-2 rounded w-full"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      className="border mt-1 p-2 rounded w-full"
                    />
                  </label>
                  <label>
                    Message
                    <textarea
                      name="message"
                      rows="5"
                      required
                      className="border mt-1 p-2 rounded w-full"
                    ></textarea>
                  </label>
                  <Button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
