"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "+919680000315";
  const message = encodeURIComponent(
    "Hi, I am interested in one of your properties. Please share more details."
  );

  const link = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-lg group-hover:blur-xl transition" />

      {/* Button */}
      <div
        className="
          relative
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-[#25D366]
          shadow-xl
          hover:scale-105
          transition
          duration-300
        "
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>

      {/* Floating label (desktop only) */}
      <div
        className="
          absolute right-16 top-1/2 -translate-y-1/2
          bg-white text-slate-800 text-sm font-medium
          px-4 py-2 rounded-xl shadow-lg
          opacity-0 group-hover:opacity-100
          transition hidden md:block
          whitespace-nowrap
        "
      >
        Chat with us on WhatsApp
      </div>
    </a>
  );
}
