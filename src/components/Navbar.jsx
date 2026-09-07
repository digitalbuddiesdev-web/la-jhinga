import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import laJhingaLogoImg from '../assets/la_jhingalogo.jpg';

export default function Navbar({ data, onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav-lajhinga py-3 shadow-lg shadow-[#014E68]/10'
          : 'bg-gradient-to-b from-[#FFF8F5]/95 via-[#FFF8F5]/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identity / Official Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group shrink-0"
          aria-label="Scroll to top"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden flex items-center justify-center p-0.5 transition-all transform group-hover:scale-105 bg-white border border-[#014E68]/20 shadow-md shadow-[#014E68]/10">
            <img
              src={laJhingaLogoImg}
              alt="La Jhinga Seafood Logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black tracking-wider text-base sm:text-lg leading-none uppercase text-[#014E68] font-serif">
                LA JHINGA
              </span>
              <span className="hidden md:inline-block text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#5BC5D2]/20 text-[#014E68] border border-[#5BC5D2]/40">
                Palolem &bull; Goa
              </span>
            </div>
            <p className="text-[10px] sm:text-xs tracking-tight text-[#0A2E3A]/75">
              Seafood | Cafe | Dine
            </p>
          </div>
        </button>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F7EDE7]/80 p-1.5 rounded-full border border-[#014E68]/15">
          <button
            onClick={() => scrollTo('seafood-hero')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-white transition-all"
          >
            Seafood Catch
          </button>
          <button
            onClick={() => scrollTo('multi-cuisine')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-white transition-all"
          >
            Multi-Cuisine
          </button>
          <button
            onClick={() => scrollTo('open-air')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-white transition-all"
          >
            Open-Air Breeze
          </button>
          <button
            onClick={() => scrollTo('live-music')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-white transition-all"
          >
            Live Music
          </button>
          <button
            onClick={() => scrollTo('reviews')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-white transition-all"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollTo('gallery')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-white transition-all"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollTo('location')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-white transition-all"
          >
            Location
          </button>
        </nav>

        {/* Right: CTA (Call Now / Reserve / Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Call Link */}
          <a
            href={`tel:${data.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide border border-[#014E68]/20 bg-white hover:bg-[#F7EDE7] text-[#014E68] transition-all"
            title={`Call ${data.fullName}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#014E68]" />
            <span className="font-mono">{data.phoneDisplay}</span>
          </a>

          {/* Reserve Button */}
          <button
            onClick={onOpenReservation}
            className="px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide flex items-center gap-1.5 btn-lajhinga-primary"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Reserve</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[#014E68]/15 text-[#014E68] lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-b border-[#014E68]/15 px-4 py-5 space-y-3 backdrop-blur-xl animate-fadeIn">
          <button
            onClick={() => scrollTo('seafood-hero')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-[#FFF8F5]"
          >
            Fresh Seafood Catch
          </button>
          <button
            onClick={() => scrollTo('multi-cuisine')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-[#FFF8F5]"
          >
            Multi-Cuisine Journey
          </button>
          <button
            onClick={() => scrollTo('open-air')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-[#FFF8F5]"
          >
            Dine With The Coastal Breeze
          </button>
          <button
            onClick={() => scrollTo('live-music')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-[#FFF8F5]"
          >
            Live Music Evenings
          </button>
          <button
            onClick={() => scrollTo('reviews')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-[#FFF8F5]"
          >
            Guest Reviews (4.7 ★)
          </button>
          <button
            onClick={() => scrollTo('gallery')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-[#FFF8F5]"
          >
            Coastal Photo Gallery
          </button>
          <button
            onClick={() => scrollTo('location')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#0A2E3A] hover:text-[#014E68] hover:bg-[#FFF8F5]"
          >
            Find Us Near Palolem Beach
          </button>
        </div>
      )}
    </header>
  );
}
