"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const propertyTypes = [
  {
    id: 1,
    type: "1 Bedroom",
    description:
      "Perfect for individuals or couples seeking modern luxury in a compact, elegant space.",
    paymentPlan: {
      downPayment: 20,
      duringConstruction: 55,
      onHandover: 25,
    },
  },
  {
    id: 2,
    type: "2 Bedroom",
    description:
      "Ideal for small families or professionals who value space and sophistication.",
    paymentPlan: {
      downPayment: 20,
      duringConstruction: 55,
      onHandover: 25,
    },
  },
  {
    id: 3,
    type: "Penthouse",
    description:
      "Ultimate luxury living with panoramic views and exclusive amenities.",
    paymentPlan: {
      downPayment: 20,
      duringConstruction: 55,
      onHandover: 25,
    },
  },
];

export default function PaymentPlan() {
  return (
    <section id="payment-plan" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-charcoal-900 mb-4 tracking-tight">
            Flexible Payment Plan
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Secure your home with our flexible payment plan designed for your
            convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propertyTypes.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{property.type}</CardTitle>
                  <CardDescription className="text-base">
                    {property.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-beige-50 rounded-lg">
                      <span className="text-sm font-medium text-charcoal-700">
                        Down Payment
                      </span>
                      <span className="text-3xl font-light text-charcoal-900">
                        {property.paymentPlan.downPayment}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-beige-50 rounded-lg">
                      <span className="text-sm font-medium text-charcoal-700">
                        During Construction
                      </span>
                      <span className="text-3xl font-light text-charcoal-900">
                        {property.paymentPlan.duringConstruction}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-beige-50 rounded-lg">
                      <span className="text-sm font-medium text-charcoal-700">
                        On Handover
                      </span>
                      <span className="text-3xl font-light text-charcoal-900">
                        {property.paymentPlan.onHandover}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
