"use client";
import React from "react";
import Link from "next/link";

export default function SellBuyPage() {
  return (
    <main className="min-h-screen bg-orange-50 pt-28 pb-16 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-4">Sell & Buy with Climber</h1>
          <p className="mb-6 text-lg text-gray-700">
            Whether you&apos;re selling your property or searching for your dream home, Climber Real Estate is here to guide you every step of the way. Our expert team delivers tailored strategies and personal support to ensure your success.
          </p>
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <h2 className="text-xl font-semibold text-orange-700 mb-2">Selling?</h2>
              <ul className="list-disc pl-5 text-gray-800 space-y-1">
                <li>Free property appraisal</li>
                <li>Custom marketing campaigns</li>
                <li>Expert negotiation & support</li>
                <li>Access to qualified buyers</li>
                <li>Transparent communication</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <h2 className="text-xl font-semibold text-orange-700 mb-2">Buying?</h2>
              <ul className="list-disc pl-5 text-gray-800 space-y-1">
                <li>Personalized property search</li>
                <li>Early access to new listings</li>
                <li>Guidance through the buying process</li>
                <li>Local market expertise</li>
                <li>After-sale support</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition text-center">Request a Free Appraisal</Link>
            <Link href="/listings" className="bg-white border border-orange-500 text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 rounded-lg transition text-center">Browse Listings</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
