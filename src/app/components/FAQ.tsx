"use client";
import React, { useState } from "react";

const FAQS = [
  {
    question: "How does Climber offer such low commission?",
    answer:
      "We use technology and streamlined processes to keep costs low, passing those savings on to you. Our 1.5% commission is fair, transparent, and comes with full service—no hidden fees.",
  },
  {
    question: "Is the free valuation really instant?",
    answer:
      "Yes! Our AI-powered tool gives you a value estimate in seconds, using real market data. For an even more accurate figure, book a no-obligation in-person appraisal with our team.",
  },
  {
    question: "Do I have to sign an exclusive agreement?",
    answer:
      "No. We offer flexible agency agreements with no lock-in period. You stay in control at every step.",
  },
  {
    question: "How will you market my property?",
    answer:
      "Your property will be listed on all major NZ property sites, featured in targeted digital ads, and promoted with professional photography, video, and local outreach.",
  },
  {
    question: "What support will I get?",
    answer:
      "You’ll have a dedicated agent from start to finish, plus full support from our expert team. We handle everything so you can sell with confidence.",
  },
  {
    question: "Can you help buyers too?",
    answer:
      "Absolutely! Our agents are experts at helping buyers find the right property and negotiate the best deal. Get in touch for a personalised consultation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {FAQS.map((faq, i) => (
        <div key={faq.question} className="bg-orange-50 rounded-xl shadow">
          <button
            className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span className="font-bold text-lg text-orange-700">{faq.question}</span>
            <svg
              className={`w-6 h-6 ml-4 transform transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            id={`faq-panel-${i}`}
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${open === i ? 'max-h-96 py-4 px-6' : 'max-h-0 py-0 px-6'}`}
            aria-hidden={open !== i}
          >
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
