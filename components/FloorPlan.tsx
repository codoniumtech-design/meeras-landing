"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye, X, MoveRight, Ruler, BedDouble, Bath } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- Mock Data (Replace these paths with your actual assets) ---
const floorPlans = [
  {
    id: "1-bed",
    label: "1 Bedroom",
    title: "The Solstice Suite",
    sqft: "1,150 Sq. Ft.",
    type: "Luxury Apartment",
    beds: 1,
    baths: 1.5,
    description: "An intimate sanctuary designed for the modern professional. Features a panoramic balcony and open-concept living.",
    image: "/assets/floorplan.png", // Replace with your floor plan image
    pdf: "/assets/floorplan.pdf",  
  }
];

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState(floorPlans[0].id);
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);

  const activePlan = floorPlans.find((plan) => plan.id === activeTab) || floorPlans[0];

  return (
    <section className="py-24 bg-[#faf9f6] relative overflow-hidden" id="floor-plans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0e3025]/5 skew-x-12 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0e3025] mb-4">
            Crafted for <span className="text-[#cfa346] italic">Life.</span>
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Explore our meticulously designed layouts, optimized for space, light, and luxury living.
          </p>
        </div>

        {/* Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {floorPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActiveTab(plan.id)}
              className={cn(
                "px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all border rounded-sm min-w-[140px]",
                activeTab === plan.id
                  ? "bg-[#0e3025] text-white border-[#0e3025] shadow-lg transform -translate-y-1"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#cfa346] hover:text-[#0e3025]"
              )}
            >
              {plan.label}
            </button>
          ))}
        </div> */}

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-gray-100"
          >
            {/* Left: Details */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <span className="text-[#cfa346] text-xs font-bold tracking-[0.2em] uppercase">
                  {activePlan.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-[#0e3025] mt-2 mb-4">
                  {activePlan.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {activePlan.description}
                </p>
              </div>

              {/* Specs Grid */}
              {/* <div className="grid grid-cols-2 gap-y-6 gap-x-4 py-6 border-t border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Ruler className="text-[#cfa346] w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Total Area</p>
                    <p className="text-lg font-semibold text-[#0e3025]">{activePlan.sqft}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BedDouble className="text-[#cfa346] w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Bedrooms</p>
                    <p className="text-lg font-semibold text-[#0e3025]">{activePlan.beds} Beds</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bath className="text-[#cfa346] w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Bathrooms</p>
                    <p className="text-lg font-semibold text-[#0e3025]">{activePlan.baths} Baths</p>
                  </div>
                </div>
              </div> */}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={() => setPreviewPdf(activePlan.pdf)}
                  className="bg-[#0e3025] hover:bg-[#1a4d3d] text-white h-12 px-8 uppercase tracking-widest text-xs font-bold rounded-none flex-1"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Plan
                </Button>
                
                <a 
                  href={activePlan.pdf} 
                  download 
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full border-[#0e3025] text-[#0e3025] hover:bg-[#0e3025] hover:text-white h-12 px-8 uppercase tracking-widest text-xs font-bold rounded-none transition-all"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Image Preview */}
            <div className="relative order-1 lg:order-2 bg-gray-50 rounded-xl p-8 flex items-center justify-center min-h-[400px] border border-gray-100">
               {/* NOTE: Since you might not have real images yet, 
                  this div acts as a placeholder. Replace with <Image /> 
                  when you have the assets.
               */}
               <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                  <Image 
                    src={activePlan.image} 
                    alt={activePlan.title}
                    width={600}
                    height={600}
                    className="object-contain drop-shadow-2xl"
                  />
                  
                  {/* Overlay Hint */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-gray-500 flex items-center gap-1 shadow-sm">
                        <MoveRight className="w-3 h-3" />
                        Interactive View
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- PDF PREVIEW MODAL --- */}
      <AnimatePresence>
        {previewPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setPreviewPdf(null)} // Close on backdrop click
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on content click
              className="bg-white w-full max-w-6xl h-[85vh] rounded-lg overflow-hidden shadow-2xl flex flex-col relative"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white z-10">
                <h3 className="text-lg font-bold text-[#0e3025] uppercase tracking-wider">
                   Floor Plan Preview
                </h3>
                <button
                  onClick={() => setPreviewPdf(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* PDF Container (Iframe) */}
              <div className="flex-1 bg-gray-50 relative">
                <iframe
                  src={`${previewPdf}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-none"
                  title="PDF Preview"
                />
                
                {/* Fallback for mobile if iframe doesn't load nicely */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
                    <a href={previewPdf} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-[#0e3025] text-white shadow-lg">
                            Open Full PDF
                        </Button>
                    </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}