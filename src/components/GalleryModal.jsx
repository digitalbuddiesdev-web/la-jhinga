import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function GalleryModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onPrev,
  onNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation - Prev */}
      {items.length > 1 && (
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black max-h-[70vh]">
          <img
            src={currentItem.image}
            alt={currentItem.title || 'Gallery item'}
            className="w-full h-full max-h-[70vh] object-contain select-none"
          />
        </div>

        {/* Caption Card */}
        <div className="mt-4 text-center max-w-xl px-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-medium bg-[#5BC5D2]/25 text-[#014E68] bg-white border border-[#5BC5D2]/50 font-bold">
              <Tag className="w-3 h-3" />
              {currentItem.category}
            </span>
            <span className="text-xs text-white/60">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <h4 className="text-lg font-bold text-white tracking-wide">
            {currentItem.title}
          </h4>
          {currentItem.caption && (
            <p className="text-sm text-zinc-300 mt-1 leading-snug">
              {currentItem.caption}
            </p>
          )}
        </div>
      </div>

      {/* Navigation - Next */}
      {items.length > 1 && (
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
