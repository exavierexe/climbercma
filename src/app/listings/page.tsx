import React from "react";
import Image from "next/image";

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
  },
];

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-orange-50 py-16 px-2 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-10 text-center">Properties for Sale</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-4 flex flex-col">
              <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden">
                <Image src={listing.image} alt={listing.title} fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-orange-700 mb-2">{listing.title}</h2>
              <div className="text-gray-600 mb-1">{listing.location}</div>
              <div className="text-orange-600 text-xl font-semibold mb-2">{listing.price}</div>
              <div className="flex gap-4 text-gray-500 text-sm mb-3">
                <span>{listing.beds} beds</span>
                <span>{listing.baths} baths</span>
                <span>{listing.carparks} carparks</span>
              </div>
              <div className="text-gray-700 mb-4 flex-1">{listing.description}</div>
              <a href={`/listings/${listing.id}`} className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg transition text-center block" tabIndex={0} role="button">View Details</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
