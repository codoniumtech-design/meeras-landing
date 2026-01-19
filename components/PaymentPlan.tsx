"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Building2, Calendar, CheckCircle2 } from "lucide-react";

// --- Data Extracted from your Image ---
const projectDetails = {
  name: "Star Edge",
  developer: "Real Estate",
  handover: "August 2030",
};

// Pricing Data
const unitTypes = [
  {
    id: 1,
    type: "1-Bedroom",
    price: "2.0M",
    size: "Compact Luxury",
  },
  {
    id: 2,
    type: "2-Bedroom",
    price: "4.0M",
    size: "Family Suite",
  },
  {
    id: 3,
    type: "2-Bedroom + Maid",
    price: "5.1M",
    size: "Extended Family",
  },
  {
    id: 4,
    type: "3-Bedroom",
    price: "7.7M",
    size: "Premium Residence",
  },
  {
    id: 5,
    type: "4-Bedroom",
    price: "10.7M",
    size: "Grand Residence",
  },
  {
    id: 6,
    type: "Penthouse",
    price: "34.1M",
    size: "Sky Villa",
  },
];

// Detailed Payment Schedule (Calculated from image)
// Booking (20%) + Construction (10+5+10+10+10+10 = 55%) + Handover (25%)
const paymentSummary = {
  downPayment: 20,
  construction: 55,
  handover: 25,
};

const detailedMilestones = [
  { label: "Down Payment", date: "On Booking", percent: "20%" },
  { label: "1st Installment", date: "June 2026", percent: "10%" },
  { label: "2nd Installment", date: "Oct 2026", percent: "5%" },
  { label: "3rd Installment", date: "Mar 2027", percent: "10%" },
  { label: "4th Installment", date: "Aug 2027", percent: "10%" },
  { label: "5th Installment", date: "Jan 2028", percent: "10%" },
  { label: "6th Installment", date: "May 2028", percent: "10%" },
  { label: "On Handover", date: "Aug 2030", percent: "25%" },
];

export default function PaymentPlanCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        // If we are at the end, reset to start, otherwise scroll one card width
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        const scrollAmount = clientWidth < 768 ? clientWidth : clientWidth / 3; // 1 card width

        if (isAtEnd) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3500); // Scroll every 3.5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 bg-[#050505] text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#050505] to-[#050505] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-thin tracking-[0.2em] text-white uppercase"
          >
            {projectDetails.name} <span className="text-[#D4AF37] text-2xl align-top"> {projectDetails.developer}</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full opacity-80" />
          <p className="text-neutral-400 text-sm md:text-base tracking-widest uppercase">
            Payment Plan & Pricing • Handover {projectDetails.handover}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scroll Area */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 gap-6 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {unitTypes.map((unit, index) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] snap-center"
              >
                {/* Card Design */}
                <div className="h-full bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  
                  {/* Card Header */}
                  <div className="p-8 border-b border-neutral-800 bg-gradient-to-b from-white/5 to-transparent">
                    <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-2">Starting From</p>
                    <h3 className="text-4xl md:text-5xl font-light text-white mb-1">
                      <span className="text-2xl align-top mr-1">AED</span>{unit.price}
                    </h3>
                    <p className="text-lg text-neutral-300 font-medium mt-4">{unit.type}</p>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">{unit.size}</p>
                  </div>

                  {/* Card Body - Payment Breakdown Summary */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]" /> Down Payment
                      </span>
                      <span className="text-white font-semibold">{paymentSummary.downPayment}%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#D4AF37] h-full w-[20%]" />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-400 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-neutral-500" /> During Const.
                      </span>
                      <span className="text-white font-semibold">{paymentSummary.construction}%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-neutral-500 h-full w-[55%]" />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-400 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-white" /> On Handover
                      </span>
                      <span className="text-white font-semibold">{paymentSummary.handover}%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-[25%]" />
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0">
                    <button className="w-full py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-sm tracking-widest uppercase rounded">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Indicators (Visual only) */}
          <div className="flex justify-center gap-2 mt-4">
             {unitTypes.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
             ))}
          </div>
        </div>

        {/* Detailed Timeline Section (Optional Bottom Grid) */}
        <div className="mt-20 border-t border-neutral-800 pt-10">
            <h4 className="text-center text-2xl font-light mb-10 text-neutral-300">Detailed Schedule</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {detailedMilestones.map((item, i) => (
                    <div key={i} className="text-center p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/50">
                        <p className="text-[#D4AF37] font-bold text-xl mb-1">{item.percent}</p>
                        <p className="text-white text-sm font-medium">{item.label}</p>
                        <p className="text-neutral-500 text-xs mt-1 uppercase">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}