"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Brand Colors (Hardcoded for consistency)
const COLORS = {
  primary: "text-[#0e3025]", // Deep Luxurious Green (Almost Black)
  accent: "text-[#cfa346]",  // Gold/Bronze for active states
  bgScroll: "bg-white/90",   // Stronger white on scroll
  bgInitial: "bg-white/60",  // Semi-transparent on top
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const pathname = usePathname();

  // Handle Scroll (Glass Effect & Active State Spy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // 1. Navbar compact effect trigger
      setIsScrolled(scrollY > 10);

      // 2. Active State Logic (Home vs Gallery)
      // Only run this logic on the homepage
      if (pathname === "/") {
        const gallerySection = document.getElementById("gallery");
        if (gallerySection) {
          const offset = gallerySection.offsetTop - 100; // Buffer
          if (scrollY >= offset) {
            setActiveSection("Gallery");
          } else {
            setActiveSection("Home");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle Page Changes
  useEffect(() => {
    if (pathname === "/contact") setActiveSection("Contact Us");
    else if (pathname === "/" && window.location.hash !== "#gallery") setActiveSection("Home");
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? `${COLORS.bgScroll} backdrop-blur-md border-gray-200/50 shadow-sm h-16` // Scrolled: Solid & Compact
          : `${COLORS.bgInitial} backdrop-blur-sm border-transparent h-20 md:h-20` // Top: Slightly taller, airy
      )}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* --- LOGO --- */}
         <Link href="/" className="relative h-full flex items-center shrink-0 py-2">
  <div className="relative h-16 md:h-20 w-auto">
    <Image 
      src="/assets/logo.png"
      alt="Star Edge"
      width={400}
      height={200}
      className="object-contain h-full w-auto"
      priority
    />
  </div>
</Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label;
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold tracking-wider uppercase transition-colors duration-300 relative py-1",
                    isActive ? COLORS.accent : `${COLORS.primary} hover:opacity-70`
                  )}
                >
                  {link.label}
                  {/* Underline Animation */}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-[2px] bg-[#cfa346] transform transition-transform duration-300 origin-left",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}></span>
                </Link>
              );
            })}

            <Button
              className="bg-[#0e3025] hover:bg-[#1a4d3d] text-white text-xs font-bold tracking-widest uppercase px-6 py-5 rounded-none shadow-md transition-all"
              onClick={() => document.getElementById("register-interest")?.scrollIntoView({ behavior: "smooth" })}
            >
              Register Interest
            </Button>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            className={cn("md:hidden p-2", COLORS.primary)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium tracking-wide",
                    activeSection === link.label ? "text-[#cfa346]" : "text-[#0e3025]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button 
                  className="w-full bg-[#0e3025] text-white uppercase tracking-widest py-6"
                  onClick={() => {
                     setIsMobileMenuOpen(false);
                     document.getElementById("register-interest")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Register Interest
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}