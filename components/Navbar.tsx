"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Add a small buffer so the transition feels intentional
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper function to determine text colors based on scroll state
  const getTextColor = () => {
    if (isScrolled) return "text-charcoal-900 hover:text-charcoal-700";
    return "text-white hover:text-white/80";
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2" // Slightly smaller padding when scrolled
          : "bg-transparent py-4" // Larger padding when at top
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-1 transition-transform duration-300 group-hover:scale-105">
              <div
                className={cn(
                  "h-8 w-1 transition-colors duration-300",
                  isScrolled ? "bg-charcoal-900" : "bg-white"
                )}
              ></div>
              <div
                className={cn(
                  "h-6 w-1 transition-colors duration-300",
                  isScrolled ? "bg-charcoal-900" : "bg-white"
                )}
              ></div>
              <div
                className={cn(
                  "h-10 w-1 transition-colors duration-300",
                  isScrolled ? "bg-charcoal-900" : "bg-white"
                )}
              ></div>
            </div>
            <span
              className={cn(
                "text-2xl font-bold tracking-widest uppercase transition-colors duration-300",
                isScrolled ? "text-charcoal-900" : "text-white"
              )}
            >
              MERAAS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/#gallery" && pathname === "/");
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold tracking-wide transition-all duration-300 relative py-1",
                    getTextColor(),
                    isActive && !isScrolled ? "text-white font-bold" : "",
                    isActive && isScrolled ? "text-charcoal-900 font-bold" : ""
                  )}
                >
                  {link.label}
                  {/* Underline Animation */}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                    isActive ? "scale-x-100" : "",
                    isScrolled ? "bg-charcoal-900" : "bg-white"
                  )}></span>
                </Link>
              );
            })}
            
            <Button
              variant={isScrolled ? "premium" : "outline"} // Switch variant based on scroll
              size="lg"
              className={cn(
                "font-semibold tracking-wide transition-all duration-300",
                !isScrolled && "border-white text-white hover:bg-white hover:text-charcoal-900 hover:border-white bg-transparent"
              )}
              onClick={() => {
                const element = document.getElementById("register-interest");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Register Interest
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-inset",
              isScrolled ? "text-charcoal-900 hover:bg-gray-100" : "text-white hover:bg-white/20 focus:ring-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "block px-4 py-3 text-lg font-medium rounded-md transition-colors",
                    pathname === link.href
                      ? "bg-gray-50 text-charcoal-900 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-charcoal-900"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button
                  variant="premium"
                  className="w-full py-6 text-lg shadow-md"
                  onClick={() => {
                    handleLinkClick();
                    const element = document.getElementById("register-interest");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
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