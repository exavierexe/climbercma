"use client";
import React from "react";

export default function Map() {
  return (
    <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Climber Property North Shore Map"
        src="https://www.google.com/maps?q=7A+Douglas+Alexander+Parade,+Rosedale,+Auckland+0632,+New+Zealand&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
