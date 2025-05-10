"use client";
import React, { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import PropertyEnquiryModal from "../../components/PropertyEnquiryModal";
import Link from "next/link";

// Dummy data (should be replaced with real data or fetched from an API/database)
const listings = [
  {
    id: 1,
    title: "Modern Family Home",
    location: "Rosedale, Auckland",
    price: "$1,250,000",
    image: "/pictures/RBPI057642.jpg",
    beds: 4,
    baths: 2,
    carparks: 2,
    description: "Spacious, sun-filled home with open-plan living and a private backyard. Walk to parks, shops, and top schools.",
    features: [
      "Open-plan kitchen & living",
      "Private backyard",
      "Double garage",
      "Heat pump & insulation",
      "Zoned for top schools"
    ],
  },
  {
    id: 2,
    title: "City Apartment Oasis",
    location: "Hamilton Central",
    price: "$695,000",
    image: "/pictures/RBPI064091.jpg",
    beds: 2,
    baths: 1,
    carparks: 1,
    description: "Stylish, low-maintenance apartment with balcony views and secure parking. Perfect for professionals or investors.",
    features: [
      "Balcony with city views",
      "Secure building entry",
      "Dedicated car park",
      "Modern kitchen & appliances"
    ],
  },
  {
    id: 3,
    title: "Coastal Retreat",
    location: "Manukau Heads, Auckland",
    price: "$1,850,000",
    image: "/pictures/RBPI064169.jpg",
    beds: 5,
    baths: 3,
    carparks: 3,
    description: "Luxury living by the sea! Expansive decks, entertainer’s kitchen, and direct beach access for the ultimate lifestyle.",
    features: [
      "Direct beach access",
      "Expansive decks",
      "Entertainer’s kitchen",
      "Master suite with ocean views",
      "Triple garage"
    ],
  },
];

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const [modalOpen, setModalOpen] = useState(false);
  const listing = listings.find(l => l.id === Number(params.id));
  if (!listing) return notFound();

  return (
    <div className="min-h-screen bg-orange-50 py-16 px-2 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <Link href="/listings" className="text-orange-600 hover:underline font-semibold text-sm">&larr; Back to Listings</Link>
        </div>
        <div className="relative w-full h-80 md:h-[28rem]">
          <Image src={listing.image} alt={listing.title} fill className="object-cover" />
        </div>
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-700 mb-2">{listing.title}</h1>
          <div className="text-gray-600 text-lg mb-1">{listing.location}</div>
          <div className="text-orange-600 text-2xl font-bold mb-4">{listing.price}</div>
          <div className="flex gap-6 text-gray-500 text-base mb-4">
            <span>{listing.beds} beds</span>
            <span>{listing.baths} baths</span>
            <span>{listing.carparks} carparks</span>
          </div>
          <div className="text-gray-800 mb-6">{listing.description}</div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-orange-700 mb-2">Features</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {listing.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition"
            onClick={() => setModalOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={modalOpen}
            aria-controls="property-enquiry-modal"
          >
            Enquire Now
          </button>
        </div>
      </div>
      <PropertyEnquiryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        propertyTitle={listing.title}
      />
    </div>
  );
}
