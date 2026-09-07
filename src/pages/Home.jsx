import React, { useState } from 'react';
import {
  Phone,
  Calendar,
  Waves,
  Fish,
  Wind,
  Music2,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sun,
  Heart
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ReviewSection from '../components/ReviewSection';
import MasonryGallery from '../components/MasonryGallery';
import SocialSection from '../components/SocialSection';
import LocationSection from '../components/LocationSection';
import laJhingaLogoImg from '../assets/la_jhingalogo.jpg';

export default function Home({ data, onOpenReservation }) {
  const [activeCuisineTab, setActiveCuisineTab] = useState(data.multiCuisine.cuisines[0].id);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedCuisine = data.multiCuisine.cuisines.find(
    (c) => c.id === activeCuisineTab
  ) || data.multiCuisine.cuisines[0];

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#0A2E3A]">
      
      {/* =========================================================================
          HERO SECTION (Light, Coastal, Warm Sand, Deep Teal & Coral)
          ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt="La Jhinga Open Air Coastal Dining"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-105"
          />
          {/* Coastal Atmosphere Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F5] via-[#014E68]/60 to-[#014E68]/85" />
          <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-[#FF8F72]/20 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5BC5D2]/25 blur-[150px] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Official Logo & Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 border border-[#014E68]/20 backdrop-blur-md mb-6 shadow-xl shadow-[#014E68]/10">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-white shrink-0 border border-[#014E68]/20 p-0.5">
              <img src={laJhingaLogoImg} alt="La Jhinga Official Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#014E68]">
              Palolem Beach &bull; Coastal Cafe & Seafood
            </span>
            <div className="flex items-center gap-1 pl-2 border-l border-[#014E68]/20 text-xs font-bold text-[#014E68]">
              <Star className="w-3.5 h-3.5 fill-[#FF8F72] text-[#FF8F72]" />
              <span>4.7</span>
              <span className="text-[#0A2E3A]/70 font-normal text-[11px]">(408 Reviews)</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-white leading-[1.1] drop-shadow-md">
            Fresh From The Sea. <br />
            <span className="italic font-normal text-[#FF8F72]">
              Made For The Moment.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl lg:text-2xl text-[#FAF5EF] font-normal max-w-3xl leading-relaxed drop-shadow">
            {data.heroSubtitle}
          </p>

          {/* Wave Motif Decorative Line */}
          <div className="my-6 inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#FAF5EF] font-bold">
            <Waves className="w-4 h-4 text-[#5BC5D2]" />
            <span>Open-Air Dining &bull; Multi-Cuisine Spread &bull; Acoustic Evenings</span>
            <Waves className="w-4 h-4 text-[#5BC5D2]" />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary Action Button */}
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase btn-lajhinga-primary flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${data.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wider bg-white/90 hover:bg-white text-[#014E68] backdrop-blur-md transition-all border border-[#014E68]/20 flex items-center justify-center gap-2.5 shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#014E68] fill-current" />
              <span>Call: {data.phoneDisplay}</span>
            </a>

            {/* Explore Menu */}
            <button
              onClick={() => scrollToSection('seafood-hero')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm text-white hover:text-[#FF8F72] transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore The Menu</span>
              <ArrowRight className="w-4 h-4 text-[#FF8F72]" />
            </button>
          </div>

          {/* Key Metric Stats Banner */}
          <div className="mt-14 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.heroStats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/90 border border-[#014E68]/15 backdrop-blur-md text-center shadow-lg"
              >
                <div className="text-xl sm:text-2xl font-bold text-[#014E68] font-serif">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#0A2E3A]/80 mt-0.5 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('seafood-hero')}
          aria-label="Scroll down"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white hover:text-[#FF8F72] transition-colors animate-bounce hidden sm:block"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* =========================================================================
          SEAFOOD SECTION (Visual Hero)
          ========================================================================= */}
      <section id="seafood-hero" className="py-20 lg:py-28 relative bg-[#FFF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            subtitle={data.seafoodHero.subtitle}
            title={data.seafoodHero.title}
            description={data.seafoodHero.description}
          />

          {/* Seafood Feature Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.seafoodHero.highlights.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-3xl card-lajhinga hover:border-[#FF8F72] transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 rounded-2xl bg-[#014E68]/10 text-[#014E68] group-hover:scale-110 transition-transform">
                      <Fish className="w-6 h-6" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF8F72]/20 text-[#014E68] border border-[#FF8F72]/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-[#014E68] tracking-wide">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm text-[#0A2E3A]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#014E68]/10 flex items-center justify-between text-xs text-[#014E68] font-bold">
                  <span>Fresh Catch Daily</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#FF8F72]" />
                </div>
              </div>
            ))}
          </div>

          {/* Seafood Visual Banner */}
          <div className="mt-12 rounded-3xl overflow-hidden relative card-lajhinga shadow-xl border-[#014E68]/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 h-[320px] lg:h-[460px] relative order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80"
                  alt="La Jhinga Signature Seafood"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-white via-transparent to-transparent" />
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 z-10 order-1 lg:order-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF8F72]">
                  COASTAL CULINARY HONESTY
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#014E68] mt-2 leading-tight">
                  Whole Pomfret, Tiger Prawns & Goan Curries
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#0A2E3A]/85 leading-relaxed">
                  Every seafood dish at La Jhinga is marinated in traditional Goan spices, freshly crushed garlic, and aged kokum. Ask our hosts for the catch of the evening and choose your preferred preparation — tandoori, recheado, butter garlic, or shallow-pan fried.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenReservation}
                    className="px-6 py-3 rounded-xl btn-lajhinga-primary font-bold text-xs tracking-wider uppercase"
                  >
                    Reserve Seafood Table
                  </button>
                  <button
                    onClick={() => scrollToSection('multi-cuisine')}
                    className="px-6 py-3 rounded-xl btn-lajhinga-secondary font-semibold text-xs tracking-wider"
                  >
                    Explore Other Cuisines
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MULTI-CUISINE SECTION (Goan, North Indian, Asian, Mexican/Continental)
          ========================================================================= */}
      <section id="multi-cuisine" className="py-20 lg:py-28 relative bg-[#F7EDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            subtitle={data.multiCuisine.subtitle}
            title={data.multiCuisine.title}
            description={data.multiCuisine.description}
          />

          {/* Cuisine Style Selector Tabs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {data.multiCuisine.cuisines.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCuisineTab(c.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                  activeCuisineTab === c.id
                    ? 'bg-[#014E68] text-white shadow-lg shadow-[#014E68]/30 scale-105'
                    : 'bg-white hover:bg-[#FFF8F5] text-[#0A2E3A] border border-[#014E68]/15'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Active Cuisine Spotlight Feature */}
          <div className="mt-10 max-w-5xl mx-auto rounded-3xl overflow-hidden card-lajhinga shadow-xl border-[#014E68]/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Image Side */}
              <div className="lg:col-span-6 h-[300px] lg:h-[400px] relative">
                <img
                  src={selectedCuisine.image}
                  alt={selectedCuisine.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#014E68] font-bold border border-[#014E68]/20 shadow-md">
                    Flavor Accent: {selectedCuisine.accent}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF8F72]">
                  Curated Cuisine
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#014E68]">
                  {selectedCuisine.name}
                </h3>
                <p className="text-sm sm:text-base text-[#0A2E3A]/85 leading-relaxed">
                  {selectedCuisine.desc}
                </p>

                <div className="pt-4 border-t border-[#014E68]/10 flex items-center justify-between">
                  <span className="text-xs text-[#0A2E3A]/70">
                    Crafted with authentic ingredients by specialist chefs.
                  </span>
                  <button
                    onClick={onOpenReservation}
                    className="text-xs font-bold text-[#014E68] hover:text-[#FF8F72] flex items-center gap-1"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          OPEN-AIR COASTAL EXPERIENCE ("Dine With The Coastal Breeze")
          ========================================================================= */}
      <section id="open-air" className="py-20 lg:py-28 relative bg-[#FFF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5BC5D2]/15 border border-[#5BC5D2]/30 text-[#014E68] text-xs font-bold uppercase tracking-wider">
                <Wind className="w-4 h-4 text-[#5BC5D2]" />
                <span>{data.openAirExperience.subtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#014E68] leading-tight">
                {data.openAirExperience.title}
              </h2>

              <p className="text-base sm:text-lg text-[#0A2E3A]/85 leading-relaxed">
                {data.openAirExperience.description}
              </p>

              {/* Highlight Pillars */}
              <div className="space-y-4 pt-2">
                {data.openAirExperience.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-[#014E68]/10 text-[#014E68] shrink-0 mt-0.5">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#014E68]">{h.title}</h4>
                      <p className="text-xs text-[#0A2E3A]/75 mt-0.5 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Collage Column */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] card-lajhinga shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                    alt="Open Air Palm Seating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#014E68]/15 text-center shadow-md">
                  <span className="text-2xl sm:text-3xl font-bold text-[#014E68] font-serif">100%</span>
                  <p className="text-xs text-[#0A2E3A]/80 mt-1 font-bold">Breezy Open-Air Palm Canopy</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-2xl bg-white border border-[#014E68]/15 text-center shadow-md">
                  <span className="text-2xl sm:text-3xl font-bold text-[#014E68] font-serif">Palolem</span>
                  <p className="text-xs text-[#0A2E3A]/80 mt-1 font-bold">Beachside T-Junction Setting</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] card-lajhinga shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                    alt="Restaurant Ambiance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          LIVE MUSIC SECTION ("Good Food. Coastal Air. Live Music.")
          ========================================================================= */}
      <section id="live-music" className="py-20 lg:py-28 relative bg-[#014E68] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#5BC5D2]" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FF8F72]">
                {data.liveMusic.subtitle}
              </span>
              <span className="h-px w-6 bg-[#5BC5D2]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight">
              {data.liveMusic.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {data.liveMusic.description}
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.liveMusic.features.map((feat, i) => (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2.5 rounded-xl bg-[#5BC5D2]/25 text-white">
                        <Music2 className="w-5 h-5" />
                      </span>
                      <span className="text-xs font-mono font-bold text-[#FF8F72] bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                        {feat.time}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-serif text-white">
                      {feat.name}
                    </h4>
                    <p className="text-xs text-white/80 mt-2 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#5BC5D2] flex items-center justify-between">
                    <span>Scheduled Evenings</span>
                    <span className="text-[#FF8F72] font-semibold">Complimentary with Dining</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Notice */}
            <p className="text-xs text-center text-white/70 mt-6 italic">
              *{data.liveMusic.scheduleNote}
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          HOSPITALITY SECTION ("Warm Hospitality, Served With Every Table")
          ========================================================================= */}
      <section id="hospitality" className="py-20 lg:py-28 relative bg-[#FFF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#014E68]/10 border border-[#014E68]/20 text-[#014E68] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4 text-[#FF8F72]" />
                <span>{data.hospitality.subtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#014E68] leading-tight">
                {data.hospitality.title}
              </h2>

              <p className="text-base sm:text-lg text-[#0A2E3A]/85 leading-relaxed">
                {data.hospitality.description}
              </p>

              {/* Quote Box */}
              <div className="p-6 rounded-2xl bg-white border-l-4 border-l-[#FF8F72] border-[#014E68]/15 shadow-md">
                <p className="text-sm italic text-[#0A2E3A]">
                  {data.hospitality.quote}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#014E68] mt-2">
                  &bull; Verified Diner Review
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4 pt-2">
                {data.hospitality.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#014E68] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#014E68]">{h.title}</h4>
                      <p className="text-xs text-[#0A2E3A]/75 mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden card-lajhinga border-[#014E68]/20 aspect-[4/3] shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80"
                alt="Hospitality at La Jhinga"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#014E68]/90 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-lg font-bold font-serif">A Heartfelt Palolem Welcome</h4>
                  <p className="text-xs text-white/90 mt-1">
                    Relaxed dining at your own pace, accompanied by genuine Goan warmth.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SOCIAL PROOF / REVIEWS SECTION (4.7 ★ / 408 Reviews)
          ========================================================================= */}
      <ReviewSection data={data} />

      {/* =========================================================================
          GALLERY SECTION
          ========================================================================= */}
      <MasonryGallery data={data} />

      {/* =========================================================================
          INSTAGRAM / SOCIAL SECTION
          ========================================================================= */}
      <SocialSection data={data} />

      {/* =========================================================================
          LOCATION & CONTACT SECTION
          ========================================================================= */}
      <LocationSection data={data} onOpenReservation={onOpenReservation} />

    </div>
  );
}
