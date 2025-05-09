"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"error"|"confirmed">("idle");
  const [error, setError] = useState("");
  const [confirmedAddress, setConfirmedAddress] = useState("");
  const router = useRouter();

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    // Simulate address verification
    setTimeout(() => {
      if (!address || address.length < 5) {
        setStatus("error");
        setError("Invalid address. Please enter a valid address.");
      } else {
        setStatus("confirmed");
        setConfirmedAddress(address);
        sessionStorage.setItem("cma_address", address);
        setTimeout(() => router.push("/valuation-step2"), 1200);
      }
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 gap-8 font-sans">
      <main className="flex flex-col gap-8 items-center w-full max-w-xl bg-white shadow-lg rounded-lg p-8">
        <img src="/climber-logo.png" alt="Climber Property Logo" className="mb-4 w-32 h-auto" />
        <h1 className="text-3xl font-bold text-center text-blue-900">FREE Instant AI-Powered CMA</h1>
        <p className="text-center text-gray-700 mb-2">Get Your Comprehensive Property Valuation Report <b>(No Registration!)</b></p>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleConfirm}>
          <label htmlFor="address" className="font-semibold text-gray-800">Address for Valuation</label>
          <input
            id="address"
            type="text"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
            placeholder="e.g., 123 Main Street, Auckland"
            value={address}
            onChange={e => setAddress(e.target.value)}
            disabled={status === "loading"}
            required
          />
          <button
            type="submit"
            className="bg-[var(--primary)] text-white rounded px-4 py-2 font-semibold hover:bg-[var(--primary-dark)] transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Verifying Address..." : "Get Estimate"}
          </button>
        </form>
        <div className="text-sm text-gray-500 mt-2 text-center">
          Click 'Get Estimate' to verify the address and proceed.
        </div>
        {status === "error" && (
          <div className="text-red-600 font-medium mt-2">{error}</div>
        )}
        {status === "confirmed" && (
          <div className="text-green-700 font-medium mt-2">
            Address verified successfully.<br />
            <span className="font-mono">{confirmedAddress}</span>
          </div>
        )}
      </main>
    </div>
  );
}
     
