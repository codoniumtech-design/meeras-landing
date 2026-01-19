

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768758596/The_Edit_at_d3_Int-2-BR_LV_01_gzwjep.jpg",
    alt: "Luxury bedroom interior",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768758610/The_Edit_at_d3_Int-3-BR_BH_01_oufdzu.jpg",
    alt: "Modern living room",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768758604/The_Edit_at_d3_Int-3-BR_LV_01_jcwltn.jpg",
    alt: "Elegant dining area",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768758610/The_Edit_at_d3_Int-3-BR_BR_01_arqgps.jpg",
    alt: "Luxury bathroom",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768758604/The_Edit_at_d3_Int-3-BR_LV_01_jcwltn.jpg",
    alt: "Modern kitchen",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768845063/compressed-1768844892472_al6rbl.jpg",
    alt: "Sky garden view",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768845764/compressed-1768845701317_qu5rgu.jpg",
    alt: "Sky garden view",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768846532/compressed-1768846432544_bjkdzg.jpg",
    alt: "Sky garden view",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768846532/compressed-1768846472441_zlgygu.jpg",
    alt: "Sky garden view",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768846532/compressed-1768846472441_zlgygu.jpg",
    alt: "Sky garden view",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dvtqstadx/image/upload/v1768846532/compressed-1768846445855_h2jjc2.jpg",
    alt: "Sky garden view",
  },
];
export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [direction, setDirection] = useState(0); // For slide animation direction

  // Handle Load More
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Handle Next Image
  const showNext = useCallback(() => {
    setDirection(1);
    setSelectedIndex((prev) => 
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  }, []);

  // Handle Previous Image
  const showPrev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex((prev) => 
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  // Swipe Threshold
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Animation Variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="gallery" className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#cfa346] text-xs font-bold tracking-[0.2em] uppercase">
            Visual Tour
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0e3025] mb-4 mt-2">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Discover the elegance and sophistication of our premium residences.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(0, visibleCount).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group shadow-md"
              onClick={() => setSelectedIndex(index)} // We use index for easier navigation
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Zoom Icon Hint */}
              <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="bg-white/90 backdrop-blur p-2 rounded-full text-[#0e3025]">
                  <Plus className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < galleryImages.length && (
          <div className="mt-16 flex justify-center">
            <Button
              onClick={handleLoadMore}
              variant="outline"
              className="border-[#0e3025] text-[#0e3025] hover:bg-[#0e3025] hover:text-white px-8 py-6 rounded-none uppercase tracking-widest text-xs font-bold transition-all"
            >
              Load More Photos
            </Button>
          </div>
        )}

        {/* --- LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center backdrop-blur-sm"
              onClick={() => setSelectedIndex(null)} // Close on background click
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons (Desktop) */}
              <button
                className="absolute left-4 z-50 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden md:block"
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              
              <button
                className="absolute right-4 z-50 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden md:block"
                onClick={(e) => { e.stopPropagation(); showNext(); }}
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              {/* Main Image with Swipe Logic */}
              <div 
                className="relative w-full max-w-5xl h-full flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()} 
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={selectedIndex}
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x" // Enable drag
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        showNext();
                      } else if (swipe > swipeConfidenceThreshold) {
                        showPrev();
                      }
                    }}
                    className="absolute max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
                  />
                </AnimatePresence>

                {/* Counter Label */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-widest uppercase bg-black/50 px-4 py-1 rounded-full backdrop-blur-md">
                   {selectedIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}