import React, { useState } from 'react';
import { X, Phone, MessageSquare, Clock, MapPin, Check } from 'lucide-react';
import laJhingaLogoImg from '../assets/la_jhingalogo.jpg';

export default function ReservationModal({ isOpen, onClose, data }) {
  const [guests, setGuests] = useState('2 Guests');
  const [time, setTime] = useState('7:30 PM');
  const [date, setDate] = useState('Tonight');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const phone = data?.phone || '8287696969';
  const phoneDisplay = data?.phoneDisplay || '+91 82876 96969';
  const venueName = data?.fullName || 'La Jhinga | Seafood | Cafe';

  const waMessage = encodeURIComponent(
    `Hello ${venueName}, I would like to reserve a table for ${guests} on ${date} around ${time}.`
  );
  const waUrl = `https://wa.me/91${phone}?text=${waMessage}`;

  const copyNumber = () => {
    navigator.clipboard?.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border transition-all bg-[#FFF8F5] border-[#014E68]/25 text-[#0A2E3A] shadow-2xl">
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-[#014E68]/15 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#014E68]/20 shrink-0 bg-white p-0.5">
              <img
                src={laJhingaLogoImg}
                alt={venueName}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight text-[#014E68] font-serif">
                {venueName}
              </h3>
              <p className="text-xs text-[#0A2E3A]/70">
                Instant Table & Dining Inquiries
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full transition-colors hover:bg-black/5 text-zinc-500 hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Quick Config */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#0A2E3A]/80">
                Party Size
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full text-xs font-medium rounded-lg px-2.5 py-2 border outline-none bg-white border-[#014E68]/20 text-[#0A2E3A] focus:border-[#014E68]"
              >
                <option value="2 Guests">2 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="6 Guests">6 Guests</option>
                <option value="8+ Guests (VIP/Party)">8+ (Group)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#0A2E3A]/80">
                When
              </label>
              <select
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-xs font-medium rounded-lg px-2.5 py-2 border outline-none bg-white border-[#014E68]/20 text-[#0A2E3A] focus:border-[#014E68]"
              >
                <option value="Tonight">Tonight</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="This Weekend">This Weekend</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#0A2E3A]/80">
                Preferred Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full text-xs font-medium rounded-lg px-2.5 py-2 border outline-none bg-white border-[#014E68]/20 text-[#0A2E3A] focus:border-[#014E68]"
              >
                <option value="1:00 PM">1:00 PM (Lunch)</option>
                <option value="7:00 PM">7:00 PM (Sunset)</option>
                <option value="8:30 PM">8:30 PM (Dinner)</option>
                <option value="10:00 PM">10:00 PM</option>
              </select>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            {/* Direct Call Button */}
            <a
              href={`tel:${phone}`}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg btn-lajhinga-primary shadow-[#FF8F72]/30"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Now: {phoneDisplay}</span>
            </a>

            {/* WhatsApp Booking */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-semibold text-sm tracking-wide bg-emerald-600 hover:bg-emerald-500 text-white transition-all transform hover:scale-[1.01] shadow-md shadow-emerald-900/20"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Reserve via WhatsApp</span>
            </a>

            {/* Copy Button */}
            <button
              onClick={copyNumber}
              className="w-full py-2 text-xs transition-colors flex items-center justify-center gap-1.5 text-[#0A2E3A]/70 hover:text-[#014E68]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Number copied to clipboard!</span>
                </>
              ) : (
                <>
                  <span>Copy telephone number ({phoneDisplay})</span>
                </>
              )}
            </button>
          </div>

          {/* Info footer inside modal */}
          <div className="p-3 rounded-xl text-xs space-y-1.5 bg-white border border-[#014E68]/15 text-[#0A2E3A]/85">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#014E68]" />
              <span>{data?.timings || 'Daily Open'}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#014E68]" />
              <span className="truncate">{data?.location || 'Palolem, Canacona, Goa'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
