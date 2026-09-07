import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, Compass, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import laJhingaLogoImg from '../assets/la_jhingalogo.jpg';

export default function LocationSection({ data, onOpenReservation }) {
  return (
    <section id="location" className="py-20 lg:py-28 relative bg-[#FFF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          subtitle="FIND US IN PALOLEM"
          title="Visit La Jhinga by the Beach"
          description="Located steps away from the golden sands of Palolem Beach at the Beach Road T-Junction."
        />

        {/* Two-Column Location Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all card-lajhinga shadow-xl border-[#014E68]/15">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border bg-[#5BC5D2]/15 border-[#5BC5D2]/30 text-[#014E68]">
                <Compass className="w-3.5 h-3.5 text-[#014E68]" />
                <span>South Goa Hospitality</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#014E68]/20 shrink-0 bg-white p-0.5">
                  <img
                    src={laJhingaLogoImg}
                    alt={data.fullName}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#014E68] font-serif">
                  {data.fullName}
                </h3>
              </div>

              {/* Info Items */}
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl shrink-0 bg-[#014E68]/10 text-[#014E68]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#0A2E3A]/60">Address</h5>
                    <p className="text-sm sm:text-base font-medium mt-0.5 leading-snug text-[#0A2E3A]">
                      {data.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl shrink-0 bg-[#014E68]/10 text-[#014E68]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#0A2E3A]/60">Hours</h5>
                    <p className="text-sm sm:text-base font-medium mt-0.5 text-[#0A2E3A]">
                      {data.timings}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl shrink-0 bg-[#014E68]/10 text-[#014E68]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#0A2E3A]/60">Inquiries & Booking</h5>
                    <p className="text-sm sm:text-base font-mono font-bold mt-0.5 text-[#014E68]">
                      {data.phoneDisplay}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Group */}
            <div className="mt-8 pt-6 border-t space-y-3 border-[#014E68]/15">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${data.phone}`}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide text-center flex items-center justify-center gap-2 btn-lajhinga-primary"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Now</span>
                </a>

                <a
                  href={data.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm tracking-wide text-center flex items-center justify-center gap-2 border btn-lajhinga-secondary"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

              <button
                onClick={onOpenReservation}
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm tracking-wide transition-all border flex items-center justify-center gap-2 bg-white hover:bg-[#F7EDE7] text-[#014E68] border-[#014E68]/30 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table Online</span>
              </button>
            </div>
          </div>

          {/* Interactive Map Visual Column */}
          <div className="lg:col-span-7 rounded-3xl border overflow-hidden relative min-h-[380px] lg:min-h-[460px] flex flex-col border-[#014E68]/15 bg-[#F7EDE7]">
            {/* Map Frame / Backdrop Visual */}
            <div className="relative w-full h-full min-h-[300px] flex-1">
              <iframe
                title="La Jhinga Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15410.518606622839!2d74.02047879999999!3d15.0116849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe456d25bf33eb%3A0x673a382e21bbd8ff!2sPalolem%20Beach!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 opacity-85"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Pin Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm z-10">
                <div className="p-4 rounded-2xl border backdrop-blur-xl shadow-2xl bg-white/95 border-[#014E68]/30 text-[#0A2E3A]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#014E68] text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-tight text-[#014E68] font-serif">{data.fullName}</h4>
                      <p className="text-xs mt-0.5 text-[#0A2E3A]/70">{data.shortLocation}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t flex items-center justify-between text-xs border-black/10">
                    <span className="text-emerald-500 font-bold">&bull; Open Daily</span>
                    <a
                      href={data.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold flex items-center gap-1 text-[#014E68] hover:text-[#003B4F]"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
