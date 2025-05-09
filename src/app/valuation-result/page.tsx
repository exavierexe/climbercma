"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function ValuationResult() {
  const router = useRouter();
  const params = useSearchParams();
  const address = params.get("address");
  const value = "$1,200,000"; // Mock value for now

  if (!address) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-900">No Address Provided</h1>
          <p className="mb-6 text-gray-600">Please return to the home page and enter your property address to get a valuation.</p>
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
        <img src="/climber-logo.png" alt="Climber Property Logo" className="mx-auto mb-4 w-24 h-auto" />
        <h1 className="text-2xl font-bold mb-2 text-blue-900">Your Property Valuation</h1>
        <div className="mb-4">
          <span className="block text-gray-600 mb-1">Confirmed Address:</span>
          <span className="font-mono text-sm text-gray-800 bg-gray-100 px-2 py-1 rounded">{address}</span>
        </div>
        <div className="text-4xl font-bold text-green-700 mb-2">{value}</div>
        <div className="text-gray-600 mb-4">Estimated Value</div>
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
