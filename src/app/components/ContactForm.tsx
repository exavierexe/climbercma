"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Submission failed. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center text-green-700 font-semibold">
        Thank you for reaching out! We’ll be in touch soon.
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-orange-700 font-bold mb-1">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-orange-700 font-bold mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-orange-700 font-bold mb-1">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          pattern="[0-9 +()-]*"
          className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-orange-700 font-bold mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none resize-none"
          value={form.message}
          onChange={handleChange}
        />
      </div>
      {error && <div className="text-red-600 font-semibold">{error}</div>}
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded shadow transition disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
