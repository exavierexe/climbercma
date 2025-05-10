"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ClimberRealEstate() {
  return (
    <div className="bg-orange-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-white pb-12 pt-10 md:pt-16 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-2 tracking-tight">Climber Real Estate</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">New Zealand’s Leading Tech-Driven Property Partner.</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6 justify-center md:justify-start">
              <Link href="/property-management" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold shadow transition">Property Management</Link>
              <Link href="/sell-buy" className="bg-orange-100 hover:bg-orange-200 text-orange-700 px-6 py-2 rounded font-semibold shadow transition border border-orange-200">Sell/Buy</Link>
            </div>
            <div className="mb-2">
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold text-xs mr-2">Mission</span>
              <span className="text-gray-700 font-semibold">Pay the agency what they&apos;re worth!</span>
            </div>
            <div className="mb-4">
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold text-xs mr-2">Slogan</span>
              <span className="text-gray-700 font-semibold">Your Strategic Partner</span>
            </div>
            <p className="mt-4 text-base text-gray-600">We combine technology, transparency, and a customer-first approach to deliver better results for sellers, buyers, and landlords.</p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image src="/Climber-property-logo-orange.png" alt="Climber Real Estate Logo" width={220} height={80} className="w-56 h-auto" priority />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-lg shadow p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-orange-600 mb-2">FREE Instant AI-Powered CMA</h2>
          <p className="text-gray-700">Get a free, instant Comparative Market Analysis for your property using our AI-powered tool. <Link href="/" className="text-orange-600 underline font-semibold">Try it now</Link>.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Property Listings</h2>
          <p className="text-gray-700">Browse our curated selection of current properties for sale and rent, updated in real time.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Our Offices & Team</h2>
          <p className="text-gray-700">Meet our expert team and visit us in Manukau, North Shore, or Hamilton.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Customer Reviews</h2>
          <p className="text-gray-700">See what our clients say about us. <span className="text-orange-600">中文页面</span> (Chinese translation available).</p>
        </div>
      </section>

      {/* Why Sellers Choose Section */}
      <section className="bg-orange-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-6">Why Sellers Choose Climber Real Estate</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-orange-700 mb-1">Leading Tech Platform</h3>
              <p className="text-gray-700 mb-4">Our AI-powered platform provides real-time market data and ensures efficient, transparent communication.</p>
              <h3 className="font-bold text-lg text-orange-700 mb-1">Low 1.5% + GST Commission</h3>
              <p className="text-gray-700 mb-4">Benefit from our competitive and transparent commission rate. <br />See how much you save: <a href="https://www.arizto.co.nz" target="_blank" rel="noopener" className="underline text-orange-700">Compare here</a>.</p>
              <h3 className="font-bold text-lg text-orange-700 mb-1">No Exclusivity Required</h3>
              <p className="text-gray-700 mb-4">Flexible agency agreements—no lock-in contracts.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-orange-700 mb-1">Free Auctioneer for Listings</h3>
              <p className="text-gray-700 mb-4">Save on costs with our complimentary auctioneer service for auction properties.</p>
              <h3 className="font-bold text-lg text-orange-700 mb-1">AI-Powered Targeted Ads</h3>
              <p className="text-gray-700 mb-4">We use intelligent advertising to effectively reach potential buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Listings & Sold Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">Where We’re Selling – and Where We’ve Sold</h2>
        <p className="mb-6 text-gray-700">From current listings to 100+ past sales by our experienced team, explore the full picture of our selling power.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-orange-700 mb-2">Listings</h3>
            <p className="text-gray-700 mb-2">View our current properties for sale.</p>
            <Link href="/listings" className="text-orange-600 underline font-semibold">View Listings</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-orange-700 mb-2">Sold</h3>
            <p className="text-gray-700 mb-2">Every red pin marks a successful sale by our agents.</p>
            <Link href="/sales-history" className="text-orange-600 underline font-semibold">View All Sales</Link>
          </div>
        </div>
        {/* Placeholder for the map effect and real data integration */}
        <div className="mt-8 bg-orange-50 rounded-lg p-6 text-center text-gray-500 border border-orange-100">
          <span className="font-semibold">Map of sales coming soon – powered by AI and real sales data!</span>
        </div>
      </section>

      {/* Offices & Team Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">Our Regional Network</h2>
          <p className="mb-6 text-gray-700">Three key locations: <span className="font-semibold">North Shore</span>, <span className="font-semibold">Manukau</span>, <span className="font-semibold">Hamilton</span></p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">North Shore</h3>
              <p className="text-gray-700">Our team is ready to help you in Auckland&apos;s North Shore.</p>
            </div>
            <div className="bg-orange-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">Manukau</h3>
              <p className="text-gray-700">Visit our Manukau office for expert property advice.</p>
            </div>
            <div className="bg-orange-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">Hamilton</h3>
              <p className="text-gray-700">Hamilton buyers and sellers trust our local team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Book an Appraisal</h2>
          <p className="text-lg text-orange-100 mb-6">Discover your property’s true value with our free, AI-powered CMA tool.</p>
          <Link href="/" className="bg-white text-orange-600 font-bold px-8 py-3 rounded shadow hover:bg-orange-50 transition">Get Your Free CMA</Link>
        </div>
      </section>
    </div>
  );
}
