import React, { useState } from 'react';
import { Star, CheckCircle2, ExternalLink, ThumbsUp } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function ReviewSection({ data }) {
  const reviews = data?.reviews || [];
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', ...Array.from(new Set(reviews.map((r) => r.tag).filter(Boolean)))];

  const filteredReviews = activeTag === 'All'
    ? reviews
    : reviews.filter((r) => r.tag === activeTag);

  return (
    <section id="reviews" className="py-20 lg:py-28 relative overflow-hidden bg-[#FFF8F5]">
      
      {/* Subtle Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none bg-[#5BC5D2]/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          subtitle="GUEST EXPERIENCES & REPUTATION"
          title="Palolem's Favorite Coastal Table"
          description="Consistently celebrated for fresh catch, warm Goan hospitality, and breezy open-air dining."
        />

        {/* Rating Summary Card */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl transition-all card-lajhinga shadow-xl border-[#014E68]/15">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              
              {/* Left Score Block */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-5xl sm:text-6xl font-black tracking-tight text-[#014E68] font-serif">
                    {data.rating}
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#FF8F72]" />
                    ))}
                  </div>
                </div>

                <div className="h-12 w-px hidden sm:block bg-[#014E68]/15" />

                <div>
                  <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                    <span className="text-lg font-bold text-[#014E68]">
                      Google Rating
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  </div>
                  <p className="text-sm mt-0.5 text-[#0A2E3A]/80">
                    Based on <strong className="font-bold text-[#014E68]">{data.reviewCount} authentic reviews</strong>
                  </p>
                  <p className="text-xs mt-0.5 text-[#0A2E3A]/60">
                    Verified hospitality & coastal dining in Palolem, Goa
                  </p>
                </div>
              </div>

              {/* Right Action / Badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                <div className="px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 bg-[#5BC5D2]/20 text-[#014E68] border border-[#5BC5D2]/40">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Top Rated Seafood in Palolem</span>
                </div>
                <a
                  href={data.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 bg-[#014E68] hover:bg-[#003B4F] text-white"
                >
                  <span>View on Google</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Tag Filter Pills */}
            {tags.length > 2 && (
              <div className="mt-6 pt-6 border-t border-[#014E68]/15 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-xs mr-1 font-semibold text-[#0A2E3A]/80">Filter themes:</span>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeTag === tag
                        ? 'bg-[#014E68] text-white'
                        : 'bg-[#FFF8F5] text-[#0A2E3A] border border-[#014E68]/20 hover:bg-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between card-lajhinga hover:border-[#FF8F72]"
            >
              <div>
                {/* Header: Name + Stars */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm select-none bg-[#014E68] text-white">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide leading-tight text-[#014E68]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#0A2E3A]/60">{item.date}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#FF8F72]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed italic relative text-[#0A2E3A]/90">
                  "{item.text}"
                </p>
              </div>

              {/* Tag Footer */}
              {item.tag && (
                <div className="mt-4 pt-3 border-t border-[#014E68]/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-[#5BC5D2]/20 text-[#014E68] border border-[#5BC5D2]/30">
                    Theme: {item.tag}
                  </span>
                  <span className="text-[11px] flex items-center gap-1 text-[#0A2E3A]/60">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Verified Visit
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
