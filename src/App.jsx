import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import Home from './pages/Home';
import { laJhingaData } from './data/laJhinga';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#0A2E3A]">
      {/* Global Navbar */}
      <Navbar
        data={laJhingaData}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Home Page */}
      <main>
        <Home
          data={laJhingaData}
          onOpenReservation={() => setIsReservationOpen(true)}
        />
      </main>

      {/* Global Footer */}
      <Footer data={laJhingaData} />

      {/* Floating Bottom Action Bar for Mobile Visitors */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
        <div className="p-2 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-center justify-between gap-2 bg-white/95 border-[#014E68]/20 text-[#0A2E3A] shadow-xl">
          {/* Quick Call Button */}
          <a
            href={`tel:${laJhingaData.phone}`}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border bg-[#FFF8F5] border-[#014E68]/20 text-[#014E68]"
          >
            <Phone className="w-4 h-4 fill-current text-[#014E68]" />
            <span>Call Now</span>
          </a>

          {/* Quick Table Reserve */}
          <button
            onClick={() => setIsReservationOpen(true)}
            className="flex-1 py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg btn-lajhinga-primary"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table</span>
          </button>
        </div>
      </div>

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        data={laJhingaData}
      />
    </div>
  );
}
