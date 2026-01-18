"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight">
            Unscripted.
            <br />
            <span className="font-normal">By Design.</span>
          </h1>
        </motion.div>

        {/* Quick Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 text-white">
              <div className="flex flex-wrap gap-6">
                <button
                  onClick={() => scrollToSection("payment-plan")}
                  className="text-sm font-medium hover:text-gold-400 transition-colors"
                >
                  Payment Plan
                </button>
                <button
                  onClick={() => scrollToSection("register-interest")}
                  className="text-sm font-medium hover:text-gold-400 transition-colors"
                >
                  Submit EOI
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-sm font-medium hover:text-gold-400 transition-colors"
                >
                  Location
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <span>AED 2M</span>
                <span>Q2 2030</span>
                <span>75/25</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="premium-outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-charcoal-900"
              onClick={() => {
                // Placeholder for download brochure
                window.open("/brochure.pdf", "_blank");
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
            <Button
              variant="premium"
              size="lg"
              className="bg-white text-charcoal-900 hover:bg-beige-100"
              onClick={() => scrollToSection("register-interest")}
            >
              Reserve Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
