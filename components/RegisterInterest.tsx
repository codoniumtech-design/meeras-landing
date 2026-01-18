"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterInterest() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="register-interest" className="py-24 bg-charcoal-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              THE EDIT
            </h2>
            <h3 className="text-2xl md:text-3xl font-light mb-6">
              Register Your Interest
            </h3>
          </div>

          <Card className="bg-charcoal-900 border-charcoal-800">
            <CardHeader>
              <CardTitle className="text-white">Get in Touch</CardTitle>
              <CardDescription className="text-beige-300">
                Fill out the form below and our team will contact you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2 text-beige-200"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-charcoal-800 border-charcoal-700 text-white placeholder:text-charcoal-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2 text-beige-200"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-charcoal-800 border-charcoal-700 text-white placeholder:text-charcoal-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-beige-200"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-charcoal-800 border-charcoal-700 text-white placeholder:text-charcoal-400"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-beige-200"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <select className="h-10 px-3 rounded-l-md border border-r-0 border-charcoal-700 bg-charcoal-800 text-white text-sm">
                      <option>+971</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+91</option>
                    </select>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-charcoal-800 border-charcoal-700 text-white placeholder:text-charcoal-400 rounded-l-none"
                      placeholder="50 123 4567"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="premium"
                  size="lg"
                  className="w-full bg-white text-charcoal-900 hover:bg-beige-100"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="text-xs text-beige-400 text-center mt-8 max-w-xl mx-auto">
            © 2023 Luxury Concierge Real Estate. We treat your personal
            information as confidential and in accordance with our privacy
            policy. By submitting this form, you agree to our privacy policy. We
            will not share your personal information with any third parties
            without your consent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
