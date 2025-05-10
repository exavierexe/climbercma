"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CMAHome() {
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"error"|"confirmed">("idle");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    setTimeout(() => {
      if (!address || address.length < 5) {
        setStatus("error");
        setError("Invalid address. Please enter a valid address.");
      } else if (!postcode || postcode.length < 3) {
        setStatus("error");
        setError("Please enter a valid NZ postcode.");
      } else {
        setStatus("confirmed");
        
        sessionStorage.setItem("cma_address", address);
        sessionStorage.setItem("cma_postcode", postcode);
        setTimeout(() => router.push("/valuation-step2"), 1200);
      }
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 gap-8 font-sans">
      <main className="flex flex-col gap-8 items-center w-full max-w-xl bg-white shadow-lg rounded-lg p-8">
        <Image src="/Climber-property-logo-orange.png" alt="Climber Property Logo" width={128} height={48} className="mb-4 w-32 h-auto" priority />
        <h1 className="text-3xl font-bold text-center text-blue-900">FREE Instant AI-Powered CMA</h1>
        <p className="text-center text-gray-700 mb-2">Get Your Comprehensive Property Valuation Report <b>(No Registration!)</b></p>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleConfirm}>
          <label htmlFor="address" className="font-semibold text-gray-800">Address for Valuation</label>
          <div className="relative">
            <input
              id="address"
              type="text"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-500 w-full text-black"
              placeholder="123 Main Street, Auckland"
              value={address}
              onChange={async (e) => {
                setAddress(e.target.value);
                
              }}
              autoComplete="off"
              required
            />
          </div>
          <label htmlFor="postcode" className="font-semibold text-gray-800">Postcode</label>
          <input
            id="postcode"
            type="text"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-500 text-black"
            placeholder="1010"
            value={postcode}
            onChange={e => setPostcode(e.target.value.replace(/[^0-9]/g, ""))}
            required
            maxLength={4}
            inputMode="numeric"
          />
          {status === "error" && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition mt-2"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Checking..." : "Continue"}
          </button>
        </form>
      </main>
    </div>
  );
}
