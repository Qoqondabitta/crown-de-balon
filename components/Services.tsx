"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import ServiceCard from "./ServiceCard";

const services = [
  {
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop&q=80",
    name: "Haircut",
    price: "$25",
    description:
      "Classic to modern cuts tailored to your face shape and personal style. Every time, on point.",
  },
  {
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop&q=80",
    name: "Beard Trim",
    price: "$15",
    description:
      "Shape, define, and clean your beard to perfection. From stubble to full beard, we handle it all.",
  },
  {
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop&q=80",
    name: "Haircut + Beard",
    price: "$35",
    description:
      "The full package. A fresh cut combined with a sculpted beard for a complete, put-together look.",
  },
  {
    image: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&h=400&fit=crop&q=80",
    name: "Kids Haircut",
    price: "$20",
    description:
      "Patient and skilled service for the little ones. Ages 10 and under. Stylish and stress-free.",
  },
  {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&q=80",
    name: "Fade Cut",
    price: "$30",
    description:
      "Skin fades, mid fades, high fades — executed with precision. Clean taper from top to neckline.",
  },
  {
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop&q=80",
    name: "Line Up",
    price: "$10",
    description:
      "Sharp edges and clean lines around the hairline, forehead, and temples. The finishing touch.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-dark overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimateOnScroll variant="fade-up" className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="text-gold-gradient">Services</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="section-divider" />
          </div>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every service is delivered with skill, care, and an eye for detail. No
            rush — just results.
          </p>
        </AnimateOnScroll>

        {/* Cards grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.name}
              {...service}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll variant="fade-up" delay={0.3} className="text-center mt-16">
          <p className="text-white/40 text-sm mb-5">
            Ready for a fresh look? Book your visit now.
          </p>
          <a href="tel:4376962005" className="btn-gold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call to Book · 437-696-2005
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
