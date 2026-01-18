"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light text-charcoal-900 mb-6 tracking-tight">
            Introducing The Edit at D3 by Meraas
          </h2>
          <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-3xl mx-auto">
            One to four-bedroom apartments offering unrivalled luxury, sky
            gardens, flowing spaces, and creative hubs in a connected community
            where design is a perfect harmony.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
