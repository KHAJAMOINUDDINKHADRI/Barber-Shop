import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette } from "lucide-react";
import { JSX } from "react";
import { Button } from "react-day-picker";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need an appointment or can I walk in?",
      answer:
        "We welcome both appointments and walk-ins. However, we recommend booking in advance to ensure your preferred time slot, especially on weekends. You can book through our website, by phone, or via WhatsApp.",
    },
    {
      question: "How long does a typical haircut take?",
      answer:
        "A standard men's haircut takes approximately 30-45 minutes. Services like beard trims add 15-20 minutes, while premium services like hot towel shaves may take up to an hour. We take our time to ensure quality results.",
    },
    {
      question: "What form of payment do you accept?",
      answer:
        "We accept cash, all major credit/debit cards, Apple Pay, Google Pay, and Venmo for your convenience.",
    },
    {
      question: "Do you offer any loyalty programs or discounts?",
      answer:
        "Yes, we offer a loyalty program where your 10th haircut is free. We also offer discounts for military personnel, first responders, seniors, and students with valid ID.",
    },
    {
      question: "What hair products do you use and sell?",
      answer:
        "We use and sell premium men's grooming products from brands like Uppercut Deluxe, Layrite, and American Crew. Our barbers can recommend the best products for your hair type and style.",
    },
  ];

  return (
    <div className="w-full py-16 lg:py-24 bg-background-one overflow-hidden">
      <div className="mx-[80px] px-[32px]">
        <div className="relative z-10">
          <div className="absolute top-[-24%] right-[-18%] w-[300px] h-[300px] rounded-full bg-barbershop-gold/10 z-0"></div>
          <div className="absolute bottom-[-20%] left-[-16%] w-[250px] h-[250px] rounded-full bg-barbershop-gold/10 z-0"></div>
          <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp opacity-100">
            <p className="text-barbershop-gold font-medium mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Frequently Asked Questions
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-barbershop-gold from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Answers to common questions about our barbershop services.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for questions..."
              className="w-full h-12 pl-10 pr-4 rounded-full border border-zinc-700 bg-card text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-barbershop-gold/50 focus:border-barbershop-gold transition-all duration-300"
            />
          </div>

          <div className="flex justify-center flex-wrap gap-3 mb-8">
            <button className="px-4 py-2 rounded-full bg-barbershop-gold text-black font-medium hover:bg-barbershop-gold/90 transition-all duration-300">
              All Questions
            </button>
            <button className="px-4 py-2 rounded-full border border-zinc-700 bg-transparent text-white font-medium hover:bg-barbershop-gold hover:border-barbershop-gold hover:text-black transition-all duration-300">
              General
            </button>
            <button className="px-4 py-2 rounded-full border border-zinc-700 bg-transparent text-white font-medium hover:bg-barbershop-gold hover:border-barbershop-gold hover:text-black transition-all duration-300">
              Services
            </button>
            <button className="px-4 py-2 rounded-full border border-zinc-700 bg-transparent text-white font-medium hover:bg-barbershop-gold hover:border-barbershop-gold hover:text-black transition-all duration-300">
              Pricing
            </button>
            <button className="px-4 py-2 rounded-full border border-zinc-700 bg-transparent text-white font-medium hover:bg-barbershop-gold hover:border-barbershop-gold hover:text-black transition-all duration-300">
              Support
            </button>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm mb-4"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/10 transition-colors group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-lg font-semibold text-left group-hover:text-barbershop-gold transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-white transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 py-4 text-muted-foreground border-t">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
