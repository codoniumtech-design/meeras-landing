"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Luxury bedroom interior",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    alt: "Modern living room",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    alt: "Elegant dining area",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Luxury bathroom",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600607688969-a5d83319c6e4?w=800&q=80",
    alt: "Modern kitchen",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600607688909-d5c0c8c8c8c8?w=800&q=80",
    alt: "Sky garden view",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-charcoal-900 mb-4 tracking-tight">
            Gallery
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Discover the elegance and sophistication of our premium residences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-5xl max-h-[90vh]"
            >
              <img
                src={
                  galleryImages.find((img) => img.id === selectedImage)?.src ||
                  ""
                }
                alt={
                  galleryImages.find((img) => img.id === selectedImage)?.alt ||
                  ""
                }
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
              >
                ×
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
