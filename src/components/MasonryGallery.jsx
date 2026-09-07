import React, { useState } from 'react';
import { Maximize2, Tag } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GalleryModal from './GalleryModal';

export default function MasonryGallery({ data }) {
  const galleryItems = data?.gallery || [];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openModal = (index) => {
    setActiveImageIndex(index);
    setModalOpen(true);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 relative bg-[#FFF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          subtitle="VISUAL MOMENTS"
          title="Coastal Flavors & Scenes"
          description="Moments from the open-air dining deck, fresh seafood preparations, and golden hours."
        />

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-[#014E68] text-white shadow-lg shadow-[#014E68]/20'
                  : 'bg-white hover:bg-[#F7EDE7] text-[#0A2E3A] border border-[#014E68]/15 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => openModal(idx)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#014E68]/15 bg-white hover:border-[#FF8F72] shadow-md transition-all duration-500 hover:shadow-2xl ${
                idx === 0 || idx === 5 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md bg-[#014E68]/90 text-white border border-[#5BC5D2]/40">
                  <Tag className="w-3 h-3" />
                  {item.category}
                </span>
              </div>

              {/* Hover Fullscreen Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="p-2 rounded-full backdrop-blur-md text-white flex items-center justify-center bg-[#014E68]/80">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-lg font-bold text-white tracking-wide leading-snug font-serif">
                  {item.title}
                </h4>
                {item.caption && (
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        items={filteredItems}
        currentIndex={activeImageIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
