"use client";

import { motion } from "framer-motion";
import { CreditCard, FileText, MapPin } from "lucide-react";

const quickNavItems = [
  {
    id: "payment-plan",
    label: "Payment Plan",
    icon: CreditCard,
  },
  {
    id: "register-interest",
    label: "Submit EOI",
    icon: FileText,
  },
  {
    id: "location",
    label: "Location",
    icon: MapPin,
  },
];

export default function QuickNavigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {quickNavItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-3 px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-beige-100 group"
              >
                <Icon className="h-5 w-5 text-charcoal-600 group-hover:text-charcoal-900 transition-colors" />
                <span className="text-sm font-medium text-charcoal-700 group-hover:text-charcoal-900">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
