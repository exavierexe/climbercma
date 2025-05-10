"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showNav, setShowNav] = React.useState(true);
  const lastScroll = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      if (curr < 10) {
        setShowNav(true);
        lastScroll.current = curr;
        return;
      }
      if (curr > lastScroll.current && curr > 60) {
        setShowNav(false); // scrolling down
      } else if (curr < lastScroll.current) {
        setShowNav(true); // scrolling up
      }
      lastScroll.current = curr;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-lg z-30 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image src="/Climber-property-logo-orange.png" alt="Climber Real Estate Logo" width={140} height={48} className="h-12 w-auto" priority />
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 ml-8">
          <Link href="/" className="text-orange-700 font-semibold hover:text-orange-500 transition">Home</Link>
          <Link href="/property-management" className="text-orange-700 font-semibold hover:text-orange-500 transition">Property Management</Link>
          <Link href="/sell-buy" className="text-orange-700 font-semibold hover:text-orange-500 transition">Sell/Buy</Link>
          <Link href="/listings" className="text-orange-700 font-semibold hover:text-orange-500 transition">Listings</Link>
          <Link href="/cma" className="text-orange-700 font-semibold hover:text-orange-500 transition">CMA</Link>
          <Link href="/compare" className="text-orange-700 font-semibold hover:text-orange-500 transition">Compare</Link>
          <Link href="/contact" className="text-orange-700 font-semibold hover:text-orange-500 transition">Contact</Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-orange-700 border-orange-200 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(m => !m)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-orange-100 animate-fade-in-down">
          <div className="flex flex-col px-4 py-2 gap-2">
            <Link href="/" className="py-2 text-orange-700 font-semibold hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/property-management" className="py-2 text-orange-700 font-semibold hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Property Management</Link>
            <Link href="/sell-buy" className="py-2 text-orange-700 font-semibold hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Sell/Buy</Link>
            <Link href="/listings" className="py-2 text-orange-700 font-semibold hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Listings</Link>
            <Link href="/cma" className="py-2 text-orange-700 font-semibold hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>CMA</Link>
            <Link href="/compare" className="py-2 text-orange-700 font-semibold hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Compare</Link>
            <Link href="/contact" className="py-2 text-orange-700 font-semibold hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
