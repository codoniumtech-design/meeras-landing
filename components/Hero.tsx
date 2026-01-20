"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HEADER_OFFSET = 80; // for fixed navbar overlap

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
     relative
    min-h-[calc(100svh-var(--header-height))]
    pt-[var(--header-height)]
    flex
    items-center
    justify-center
      "
    >
      {/* Background Image */}
      <div
        className="      absolute
      inset-x-0
      top-[var(--header-height)]
      bottom-0
      bg-cover
      bg-center
      bg-no-repeat"
        style={{ backgroundImage: "url('/assets/11.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-sm tracking-widest uppercase text-gold-400 mb-4">
            Star Edge Real Estate · Dubai
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Curated Living Spaces
            <br />
            <span className="font-normal">
              Designed for Dubai’s Future
            </span>
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg mb-10">
            Star Edge brings exclusive residential investments across Dubai —
            blending architectural excellence, prime locations, and high-yield
            opportunities tailored for modern investors.
          </p>
        </motion.div>

        {/* Quick Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <div className="bg-black/60 backdrop-blur-md rounded-xl p-5 mb-8">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-white">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <button
                  onClick={() => scrollToSection("payment-plan")}
                  className="hover:text-gold-400 transition"
                >
                  Payment Plan
                </button>
                <button
                  onClick={() => scrollToSection("register-interest")}
                  className="hover:text-gold-400 transition"
                >
                  Submit EOI
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="hover:text-gold-400 transition"
                >
                  Prime Location
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="premium-outline"
              size="lg"
              className="
                bg-white/10 
                backdrop-blur 
                border-white 
                text-white 
                hover:bg-white 
                hover:text-charcoal-900
              "
              onClick={() =>
                window.open(
                  "https://dubaiholding.box.com/shared/static/zkucfm3b5nso3tpc6f3cnfldm6le91q5?dl=1",
                  "_blank"
                )
              }
            >
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>

            <Button
              variant="premium"
              size="lg"
              className="
                bg-white 
                text-charcoal-900 
                hover:bg-beige-100
              "
              onClick={() => scrollToSection("register-interest")}
            >
              Reserve Your Unit
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-white/50 rounded-full flex justify-center">
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
