"use client";
import React from "react";
import Link from "next/link";

export default function PropertyManagementPage() {
  return (
    <main className="min-h-screen bg-orange-50 pt-28 pb-16 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-4">Property Management</h1>
          <p className="mb-6 text-lg text-gray-700">
            Experience stress-free property management with Climber Real Estate. Our dedicated team handles everything from tenant screening to maintenance, ensuring your investment is protected and profitable.
          </p>
          <ul className="mb-6 list-disc pl-6 text-gray-800 space-y-2">
            <li>Comprehensive tenant screening & placement</li>
            <li>Rent collection and financial reporting</li>
            <li>Regular property inspections</li>
            <li>24/7 maintenance coordination</li>
            <li>Legal compliance and documentation</li>
            <li>Transparent communication and online owner portal</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition text-center">Contact Us</Link>
            <Link href="/listings" className="bg-white border border-orange-500 text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 rounded-lg transition text-center">View Available Rentals</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
