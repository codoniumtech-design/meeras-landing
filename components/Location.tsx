"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-charcoal-900 mb-6 tracking-tight">
              Location
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-4">
              An exceptional location at the premier Dubai Design District (D3)
              in Dubai, strategically positioned near Downtown Dubai and iconic
              landmarks including The Dubai Mall and Burj Khalifa.
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Experience the perfect blend of creativity, culture, and
              connectivity in one of Dubai's most vibrant districts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            {/* Google Maps iframe placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509744317!2d55.2707838!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDubai%20Design%20District%20(D3)!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
