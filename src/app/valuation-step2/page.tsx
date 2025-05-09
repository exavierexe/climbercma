"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ValuationStep2() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("cma_address");
    if (stored) setAddress(stored);
    const storedPost = sessionStorage.getItem("cma_postcode");
    if (storedPost) setPostcode(storedPost);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally, validate/login here
    if (address && postcode) {
      sessionStorage.setItem("cma_address", address);
      sessionStorage.setItem("cma_postcode", postcode);
      router.push(`/valuation-result?address=${encodeURIComponent(address)}&postcode=${encodeURIComponent(postcode)}`);
    } else {
      alert("No address or postcode found. Please start from the home page.");
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <h1 className="text-2xl font-bold mb-4">Sign In to View Your Valuation</h1>
      <div className="mb-4 text-gray-700 text-center">
        <span className="font-semibold">Confirmed Address:</span><br />
        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{address || "(none)"}</span><br />
        <span className="font-semibold">NZ Postcode:</span><br />
        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{postcode || "(none)"}</span>
      </div>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
        <label htmlFor="email" className="font-medium">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          className="border rounded px-3 py-2 w-full"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[var(--primary)] text-white rounded px-4 py-2 font-semibold hover:bg-[var(--primary-dark)] transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
