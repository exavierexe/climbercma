"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ from "./components/FAQ";


export default function ClimberRealEstate() {
  return (
    <div className="bg-orange-50 min-h-screen font-sans">
      {/* Hero Section - Visually Striking */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/pictures/RBPI036384-EXT.jpg')", marginTop: 0, paddingTop: 0 }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/60 z-0"></div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Unlock Your Property&#39;s True Value</h1>
          <p className="text-xl md:text-2xl mb-8 font-medium text-white">Smarter selling, transparent service, unbeatable results.</p>
          <Link href="/cma" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300">Get My Free Instant Valuation</Link>
        </div>
      </div>

      {/* Climber Difference Section - 3 Image Grid + Copy */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-[340px] h-[220px] relative mb-4">
            <Image src="/pictures/RBPI057642.jpg" alt="Personal Service" fill className="rounded-2xl object-cover shadow-lg" />
          </div>
          <h3 className="text-xl font-bold text-orange-700 mb-2">Personal Service, Real Results</h3>
          <p className="text-gray-700">Work directly with a dedicated agent who knows your market—no call centres, no hand-offs, just real expertise and care.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-[340px] h-[220px] relative mb-4">
            <Image src="/pictures/RBPI064091.jpg" alt="Modern Marketing" fill className="rounded-2xl object-cover shadow-lg" />
          </div>
          <h3 className="text-xl font-bold text-orange-700 mb-2">Modern Marketing That Works</h3>
          <p className="text-gray-700">From AI-driven ads to premium photography, your home gets maximum exposure—fast, effective, and designed for today’s buyers.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-[340px] h-[220px] relative mb-4">
            <Image src="/pictures/RBPI064169.jpg" alt="Transparent Savings" fill className="rounded-2xl object-cover shadow-lg" />
          </div>
          <h3 className="text-xl font-bold text-orange-700 mb-2">Transparent Savings</h3>
          <p className="text-gray-700">Save thousands with our 1.5% commission—no hidden fees, just honest pricing and more money in your pocket.</p>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <svg className="w-12 h-12 mb-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4-2a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          <h3 className="text-xl font-bold mb-2 text-orange-700">AI-Powered Valuations</h3>
          <p className="text-gray-700">Instant, accurate estimates—no waiting, no guesswork.</p>
        </div>
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <svg className="w-12 h-12 mb-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
          <h3 className="text-xl font-bold mb-2 text-orange-700">Low 1.5% Commission</h3>
          <p className="text-gray-700">Save thousands with our fair, transparent pricing.</p>
        </div>
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <svg className="w-12 h-12 mb-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
          <h3 className="text-xl font-bold mb-2 text-orange-700">Local Experts, National Reach</h3>
          <p className="text-gray-700">Personal service from agents who know your neighbourhood.</p>
        </div>
      </section>

      {/* Second Visual Section - Digital Reach + Local Expertise */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
          <div>
            <Image src="/pictures/RBPI058275.jpg" alt="Digital Reach" width={500} height={340} className="rounded-2xl object-cover shadow-lg mb-6 md:mb-0" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-orange-700 mb-4">Your Home, Everywhere</h2>
            <p className="text-lg text-gray-700 mb-4">We combine national digital reach with deep local knowledge. Your listing appears on all major property sites, social media, and is targeted to the right buyers using smart AI tools.</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Featured on Trade Me, realestate.co.nz, and more</li>
              <li>Targeted Facebook & Instagram ads</li>
              <li>Professional video, drone, and 3D tours</li>
              <li>Local letterbox drops and community marketing</li>
            </ul>
            <p className="text-orange-700 font-bold">Climber gets your property seen by the people who matter most.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-8 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <Image src="/pictures/RBPI063892.jpg" alt="Happy client" width={80} height={80} className="rounded-full mb-4 object-cover" />
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
              </div>
              <p className="text-black text-lg font-medium mb-2">“Climber got us $80,000 over our expected sale price—seamless, stress-free, and honest!”</p>
              <span className="text-orange-600 font-semibold">Sarah L., Auckland</span>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <Image src="/pictures/RBPI064150.jpg" alt="Happy client" width={80} height={80} className="rounded-full mb-4 object-cover" />
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
              </div>
              <p className="text-black text-lg font-medium mb-2">“The team at Climber made the process so easy. Highly recommend!”</p>
              <span className="text-orange-600 font-semibold">James T., Hamilton</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Section */}
      <section className="sticky bottom-0 z-20 bg-orange-600 text-white py-4 shadow-lg flex justify-center items-center">
        <span className="mr-6 font-semibold text-lg">Ready to get started?</span>
        <Link href="/cma" className="bg-white text-orange-600 font-bold px-6 py-2 rounded-full shadow hover:bg-orange-50 transition">Get Your Free CMA</Link>
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
              <p className="text-gray-700 mb-4">Benefit from our competitive and transparent commission rate. <br />See how much you save: <Link href="/compare" className="underline text-orange-700">Compare here</Link>.</p>
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
              <p className="text-gray-700">Our team is ready to help you in Auckland&#39;s North Shore.</p>
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


      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-8 text-center">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>

      {/* CTA Section - Book an Appraisal (now last) */}
      <section className="bg-orange-500 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Book an Appraisal</h2>
          <p className="text-lg text-orange-100 mb-6">Discover your property’s true value with our free, AI-powered CMA tool.</p>
          <Link href="/cma" className="bg-white text-orange-600 font-bold px-8 py-3 rounded shadow hover:bg-orange-50 transition">Get Your Free CMA</Link>
        </div>
      </section>
    </div>
  );
}
