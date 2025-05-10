"use client";
import React from "react";

import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

export default function Contact() {
  return (
    <div className="min-h-screen font-sans py-10 px-2 bg-gradient-to-br from-orange-100 via-orange-50 to-white">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col gap-12 mt-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">Contact Us</h1>
        <section className="mb-2">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Send Us a Message</h2>
          <div className="bg-orange-50/60 border border-orange-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <ContactForm />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-2">
            {/* North Shore */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-orange-100">
              <h3 className="text-lg font-bold text-orange-700 mb-1">North Shore</h3>
              <span className="font-semibold text-orange-600">Cendy Suseno</span>
              <span className="text-gray-700">T: <a href="tel:021988596" className="underline">021 988 596</a></span>
              <span className="text-gray-700">E: <a href="mailto:info@climberproperty.com" className="underline">info@climberproperty.com</a></span>
            </div>
            {/* Manukau */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-orange-100">
              <h3 className="text-lg font-bold text-orange-700 mb-1">Manukau</h3>
              <span className="font-semibold text-orange-600">Lawson Suen</span>
              <span className="text-gray-700">T: <a href="tel:021390387" className="underline">021 390 387</a></span>
              <span className="text-gray-700">E: <a href="mailto:lawson@climberproperty.com" className="underline">lawson@climberproperty.com</a></span>
            </div>
            {/* Hamilton */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-orange-100">
              <h3 className="text-lg font-bold text-orange-700 mb-1">Hamilton</h3>
              <span className="font-semibold text-orange-600">Nicole Waugh</span>
              <span className="text-gray-700">T: <a href="tel:021569138" className="underline">021 569 138</a></span>
              <span className="text-gray-700">E: <a href="mailto:nicole@climberproperty.com" className="underline">nicole@climberproperty.com</a></span>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Find Us on the Map</h2>
          <Map />
        </section>
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Visit Us</h2>
          <div className="bg-orange-50 rounded-2xl p-6 mb-4 border border-orange-100 flex flex-col gap-2">
            <div>
              <span className="block font-semibold text-orange-600">Auckland | North Shore</span>
              <span className="text-gray-700">7A Douglas Alexander Parade, Rosedale, Auckland 0632</span>
            </div>
            <div>
              <span className="block font-semibold text-orange-600">Auckland | Manukau</span>
              <span className="text-gray-700">L1, 65E Cavendish Drive, Manukau, Auckland 2104</span>
            </div>
            <div>
              <span className="block font-semibold text-orange-600">Hamilton</span>
              <span className="text-gray-700">1088 Victoria Street, Whitiora, Hamilton 3200</span>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Business Hours</h2>
          <div className="bg-white rounded-2xl shadow p-6 border border-orange-100">
            <p className="text-gray-700 mb-1">Mon – Fri: <span className="font-semibold">9:00am – 5:30pm</span></p>
            <p className="text-gray-700">Sat & Sun: <span className="font-semibold">By appointment only</span></p>
          </div>
        </section>
        <div className="text-center text-gray-400 mt-8 text-sm">We look forward to helping you with your property needs!</div>
      </div>
    </div>
  );
}
