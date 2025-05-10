"use client";
import React from "react";
import Link from "next/link";

export default function CompareCommission() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans pb-12">
      <div className="max-w-4xl mx-auto px-4 pt-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-6 text-center">Compare Real Estate Commission Savings</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          See how much you could save by listing with Climber Real Estate compared to traditional agencies.
        </p>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Commission Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-100">
                  <th className="py-3 px-4 font-semibold text-black">Sale Price</th>
                  <th className="py-3 px-4 font-semibold text-black">Climber (1.5%+GST)</th>
                  <th className="py-3 px-4 font-semibold text-black">Traditional (2.95%+GST)</th>
                  <th className="py-3 px-4 font-semibold text-black">You Save</th>
                </tr>
              </thead>
              <tbody>
                {[
                  500000, 750000, 1000000, 1250000, 1500000, 2000000
                ].map((price) => {
                  const climber = price * 0.015 * 1.15;
                  const trad = price * 0.0295 * 1.15;
                  const save = trad - climber;
                  return (
                    <tr key={price} className="border-b hover:bg-orange-50 transition">
                      <td className="py-3 px-4 font-semibold text-gray-800">${price.toLocaleString()}</td>
                      <td className="py-3 px-4 text-orange-700 font-bold">${climber.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                      <td className="py-3 px-4 text-gray-700">${trad.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                      <td className="py-3 px-4 text-green-700 font-bold">${save.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-orange-100 rounded-xl p-6 mb-8 text-center">
          <h3 className="text-xl font-bold text-orange-700 mb-2">How does Climber keep fees so low?</h3>
          <p className="text-gray-700 mb-2">We leverage technology, streamlined processes, and a transparent business model to deliver top results at a fair price.</p>
          <p className="text-gray-700">No hidden fees. No lock-in contracts. Just expert service and real savings.</p>
        </div>
        <div className="text-center mt-8">
          <Link href="/cma" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow transition">Get Your Free CMA</Link>
        </div>
        <div className="mt-12 text-center text-sm text-gray-400">
          <span>Commission rates are indicative and for comparison only. GST at 15% included. Please confirm with your agent for a precise quote.</span>
        </div>
      </div>
    </div>
  );
}
