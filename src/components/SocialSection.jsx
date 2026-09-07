import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';

export default function SocialSection({ data }) {
  const insta = data?.instagram || {};

  // Instagram profile URL
  const instagramUrl =
    insta.url || 'https://www.instagram.com/la_jhinga/?hl=en';

  const previewPosts = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
      likes: '1.1k',
      comments: '58'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
      likes: '890',
      comments: '39'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80',
      likes: '1.6k',
      comments: '72'
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
      likes: '740',
      comments: '29'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#FFF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 transition-all card-lajhinga shadow-xl border-[#014E68]/15">
          
          {/* Header Banner */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[#014E68]/15">
            
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              
              <div className="p-4 rounded-2xl bg-[#014E68] text-white shadow-lg shadow-[#014E68]/20">
                <Instagram className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF8F72]">
                  {insta.tagline || 'Connect With Us'}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5 text-[#014E68] font-serif">
                  {insta.handle || '@la_jhinga'}
                </h3>

                <p className="text-xs mt-1 flex items-center gap-2 justify-center md:justify-start text-[#0A2E3A]/70">
                  <span>
                    {insta.followers || 'Follow us'} Followers on Instagram
                  </span>

                  <span>&bull;</span>

                  <span>Daily Catch & Acoustic Lineups</span>
                </p>
              </div>
            </div>

            {/* Follow Button */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow La Jhinga on Instagram"
              className="px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 btn-lajhinga-primary"
            >
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Posts Teaser Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {previewPosts.map((post) => (
              <a
                key={post.id}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View La Jhinga Instagram profile"
                className="group relative rounded-xl overflow-hidden aspect-square border border-[#014E68]/15 bg-white block shadow-sm"
              >
                <img
                  src={post.img}
                  alt="Instagram post preview"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#014E68]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                  
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <Heart className="w-4 h-4 fill-red-400 text-red-400" />
                    <span>{post.likes}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>{post.comments}</span>
                  </div>

                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}