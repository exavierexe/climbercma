"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"error"|"confirmed">("idle");
  const [error, setError] = useState("");
  const [confirmedAddress, setConfirmedAddress] = useState("");
  const [confirmedPostcode, setConfirmedPostcode] = useState("");
  type LinzSuggestion = { properties: { full_address?: string; address?: string; postcode?: string } };
const [addressSuggestions, setAddressSuggestions] = useState<LinzSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [fetchingSuggestions, setFetchingSuggestions] = useState(false);
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
      } else if (!postcode || postcode.length < 3) {
        setStatus("error");
        setError("Please enter a valid NZ postcode.");
      } else {
        setStatus("confirmed");
        setConfirmedAddress(address);
        setConfirmedPostcode(postcode);
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
              className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-500 w-full"
              placeholder="e.g., 123 Main Street, Auckland"
              value={address}
              onChange={async (e) => {
                setAddress(e.target.value);
                setShowSuggestions(true);
                setFetchingSuggestions(true);
                try {
                  const res = await fetch(`/api/linz-address?query=${encodeURIComponent(e.target.value)}${postcode ? `&postcode=${postcode}` : ''}`);
                  const data = await res.json();
                  setAddressSuggestions(data && data.vectorQuery && data.vectorQuery.features ? data.vectorQuery.features : []);
                } catch {
                  setAddressSuggestions([]);
                }
                setFetchingSuggestions(false);
              }}
              onFocus={() => setShowSuggestions(true)}
              autoComplete="off"
              disabled={status === "loading"}
              required
            />
            {showSuggestions && address && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded w-full max-h-40 overflow-auto shadow-lg">
                {fetchingSuggestions && (
                  <li className="p-2 text-gray-500">Loading...</li>
                )}
                {!fetchingSuggestions && addressSuggestions.length === 0 && (
                  <li className="p-2 text-gray-400">No matches</li>
                )}
                {addressSuggestions.map((s, idx) => (
                  <li
                    key={idx}
                    className="p-2 cursor-pointer hover:bg-[var(--primary-light)]"
                    onClick={() => {
                      setAddress(s.properties.full_address || s.properties.address || "");
                      setPostcode(s.properties.postcode || "");
                      setShowSuggestions(false);
                    }}
                  >
                    {s.properties.full_address || s.properties.address}
                    {s.properties.postcode ? (
                      <span className="ml-2 text-xs text-gray-500">({s.properties.postcode})</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <label htmlFor="postcode" className="font-semibold text-gray-800">NZ Postcode</label>
          <input
            id="postcode"
            type="text"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
            placeholder="e.g., 1010"
            value={postcode}
            onChange={e => setPostcode(e.target.value.replace(/[^0-9]/g, ""))}
            disabled={status === "loading"}
            required
            maxLength={4}
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
          Click &apos;Get Estimate&apos; to verify the address and proceed.
        </div>
        {status === "error" && (
          <div className="text-red-600 font-medium mt-2">{error}</div>
        )}
        {status === "confirmed" && (
          <div className="text-green-700 font-medium mt-2">
            Address verified successfully.<br />
            <span className="font-mono">{confirmedAddress}</span>
            <br />
            <span className="font-mono">NZ Postcode: {confirmedPostcode}</span>
          </div>
        )}
      </main>
    </div>
  );
}
     
