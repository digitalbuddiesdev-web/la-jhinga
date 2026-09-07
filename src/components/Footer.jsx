import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import laJhingaLogoImg from '../assets/la_jhingalogo.jpg';
import ninePMLogoImg from '../assets/9pmlogo.jpg';

export default function Footer({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#014E68]/20 bg-[#014E68] text-white relative overflow-hidden">
      
      {/* Top Banner: Sister Brand Spotlight */}
      <div className="border-b border-white/10 py-10 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF8F72]">
                Sister Hospitality Brand in Palolem
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Looking for Electric Nightlife & Live DJs?
              </h3>
              <p className="text-xs text-white/80 mt-1">
                Experience world-class mixology & late-night vibes at <strong>9PM Bar & Cafe</strong> in Mohanbagh.
              </p>
            </div>

            {/* Sister Brand Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/15 bg-[#014E68]/80 shadow-lg">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-black shrink-0 border border-white/20 p-0.5">
                <img src={ninePMLogoImg} alt="9PM Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">9PM Bar & Cafe</h4>
                <p className="text-xs text-white/80">International DJs, Cocktails & Late Night</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-white shrink-0 border border-white/20 p-0.5">
                <img src={laJhingaLogoImg} alt="La Jhinga Logo" className="w-full h-full object-contain" />
              </div>
              <h4 className="font-bold text-lg text-white font-serif tracking-wide">
                La Jhinga | Seafood
              </h4>
            </div>
            <p className="text-xs opacity-80 leading-relaxed">
              {data.heroSubtitle}
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF8F72] shrink-0" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF8F72] shrink-0" />
                <a href={`tel:${data.phone}`} className="hover:underline font-mono">
                  {data.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Explore La Jhinga
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#seafood-hero" className="hover:text-white transition-colors">&bull; Fresh Catch Seafood</a>
              </li>
              <li>
                <a href="#multi-cuisine" className="hover:text-white transition-colors">&bull; Multi-Cuisine Journey</a>
              </li>
              <li>
                <a href="#open-air" className="hover:text-white transition-colors">&bull; Open-Air Palm Dining</a>
              </li>
              <li>
                <a href="#live-music" className="hover:text-white transition-colors">&bull; Acoustic Evening Sessions</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">&bull; Guest Reviews (4.7 ★)</a>
              </li>
            </ul>
          </div>

          {/* Curated Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Curated Highlights
            </h4>
            <ul className="space-y-2 text-xs opacity-80">
              <li>&bull; Whole Pomfret & Jumbo Tiger Prawns</li>
              <li>&bull; Authentic Goan Fish Curry & Thali</li>
              <li>&bull; Multi-Cuisine (Indian, Asian, Mexican)</li>
              <li>&bull; Breezy Open-Air Coastal Seating</li>
              <li>&bull; Steps Away from Palolem Beach</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Direct Contact
            </h4>
            <p className="text-xs opacity-80">
              Table reservations, family dining & group bookings:
            </p>
            <a
              href="tel:8287696969"
              className="inline-block font-mono text-base font-bold text-[#FF8F72]"
            >
              +91 82876 96969
            </a>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-70">
          <p>
            &copy; {new Date().getFullYear()} La Jhinga Seafood & Cafe. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Near Palolem Beach, Canacona</span>
            <span>&bull;</span>
            <span className="font-mono">South Goa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
