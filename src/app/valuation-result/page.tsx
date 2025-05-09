"use client";
export const dynamic = "force-dynamic";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ValuationResult() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [median, setMedian] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [medianError, setMedianError] = useState("");

  useEffect(() => {
    const storedAddress = sessionStorage.getItem("cma_address");
    const storedPostcode = sessionStorage.getItem("cma_postcode");
    if (storedAddress) setAddress(storedAddress);
    if (storedPostcode) setPostcode(storedPostcode);
  }, []);

  useEffect(() => {
    if (postcode) {
      setLoading(true);
      fetch(`/api/stats-nz-median-prices?postcode=${postcode}`)
        .then(res => res.json())
        .then(data => {
          if (data.median) {
            setMedian(`$${data.median.toLocaleString()}`);
            setMedianError("");
          } else {
            setMedian(null);
            setMedianError("No median price found for this postcode.");
          }
        })
        .catch(() => {
          setMedian(null);
          setMedianError("Failed to fetch median price.");
        })
        .finally(() => setLoading(false));
    }
  }, [postcode]);

  if (!address || !postcode) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-900">Missing Information</h1>
          <p className="mb-6 text-gray-600">Please return to the home page and enter your property address and postcode to get a valuation.</p>
          <button
            className="bg-[var(--primary)] text-white px-4 py-2 rounded font-semibold hover:bg-[var(--primary-dark)] transition"
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <Image src="/Climber-property-logo-orange.png" alt="Climber Property Logo" width={96} height={36} className="mx-auto mb-4 w-24 h-auto" priority />
        <h1 className="text-2xl font-bold mb-2 text-blue-900">Your Property Valuation</h1>
        <div className="mb-4">
          <span className="block text-gray-600 mb-1">Confirmed Address:</span>
          <span className="font-mono text-sm text-gray-800 bg-gray-100 px-2 py-1 rounded">{address}</span>
          <br />
          <span className="block text-gray-600 mb-1 mt-2">NZ Postcode:</span>
          <span className="font-mono text-sm text-gray-800 bg-gray-100 px-2 py-1 rounded">{postcode}</span>
        </div>
        <div className="text-4xl font-bold text-green-700 mb-2">
          {loading ? (
            <span className="animate-pulse">Loading...</span>
          ) : median ? (
            median
          ) : (
            <span className="text-gray-400">N/A</span>
          )}
        </div>
        <div className="text-gray-600 mb-4">Estimated Value (Postcode Median)</div>
        {medianError && (
          <div className="text-red-500 text-sm mb-2">{medianError}</div>
        )}
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition mb-4">
          Download Valuation Report
        </button>
        <div className="mt-4">
          <p className="text-gray-500 text-sm">This is an instant estimate. For a full CMA or to speak with an agent, contact Climber Property.</p>
        </div>
        <button
          className="mt-6 bg-[var(--primary-light)] text-[var(--primary-dark)] px-4 py-2 rounded font-semibold hover:bg-[var(--primary)] hover:text-white transition"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
