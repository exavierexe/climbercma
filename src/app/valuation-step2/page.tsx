"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ValuationStep2() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");

  useEffect(() => {
    // Try to get address and postcode from URL param or sessionStorage (for direct navigation)
    const paramAddress = params.get("address");
    const paramPostcode = params.get("postcode");
    if (paramAddress) {
      setAddress(paramAddress);
      sessionStorage.setItem("cma_address", paramAddress);
    } else {
      const stored = sessionStorage.getItem("cma_address");
      if (stored) setAddress(stored);
    }
    if (paramPostcode) {
      setPostcode(paramPostcode);
      sessionStorage.setItem("cma_postcode", paramPostcode);
    } else {
      const storedPost = sessionStorage.getItem("cma_postcode");
      if (storedPost) setPostcode(storedPost);
    }
  }, [params]);

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
        <div className="flex items-center gap-2 mt-4">
          <span className="border-b w-full" />
          <span className="text-gray-400">or</span>
          <span className="border-b w-full" />
        </div>
        <button
          type="button"
          className="bg-white border border-gray-300 rounded px-4 py-2 font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>
        <button
          type="button"
          className="bg-white border border-gray-300 rounded px-4 py-2 font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <Image src="/Climber-property-logo-orange.png" alt="Climber Property Logo" width={96} height={36} className="mx-auto mb-4 w-24 h-auto" priority />Facebook
        </button>
      </form>
    </div>
  );
}
