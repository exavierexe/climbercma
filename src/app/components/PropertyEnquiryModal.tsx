"use client";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

export default function PropertyEnquiryModal({ open, onClose, propertyTitle }: { open: boolean; onClose: () => void; propertyTitle: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeInUp">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-orange-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close enquiry modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-orange-700 mb-4">Enquire about {propertyTitle}</h2>
        <ContactForm />
      </div>
    </div>
  );
}
