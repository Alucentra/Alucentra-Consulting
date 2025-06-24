import React, { useState } from "react";

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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {submitted ? (
        <p className="text-green-600 text-lg">
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

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}
