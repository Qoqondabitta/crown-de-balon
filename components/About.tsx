"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const barbers = [
  {
    name: "Marcus T.",
    title: "Master Barber & Founder",
    bio: "Over 8 years of experience crafting precision fades, tapers, and signature cuts. Marcus brings artistry and consistency to every chair.",
    specialties: ["Skin Fades", "Beard Sculpting", "Classic Cuts"],
    initials: "MT",
  },
  {
    name: "Jordan K.",
    title: "Senior Barber",
    bio: "Known for his clean line-ups and trend-forward styles. Jordan keeps up with the latest techniques to deliver looks that turn heads.",
    specialties: ["Line Ups", "Modern Styles", "Kids Cuts"],
    initials: "JK",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-dark-100 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <AnimateOnScroll variant="fade-up" className="text-center mb-20">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Who We Are
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="text-gold-gradient">Story</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="section-divider" />
          </div>
        </AnimateOnScroll>

        {/* Story block */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <AnimateOnScroll variant="slide-left">
            <div className="space-y-5 text-white/70 text-lg leading-relaxed">
              <p>
                Crown De Balon was born from a simple belief:{" "}
                <span className="text-white font-medium">
                  every man deserves to look and feel his best.
                </span>{" "}
                Founded in the heart of Toronto, we set out to create a space where
                precision meets comfort.
              </p>
              <p>
                We&apos;re not just a barbershop — we&apos;re a destination. From the
                moment you step in, you&apos;ll feel the difference. Clean tools, skilled
                hands, and a team that actually listens to what you want.
              </p>
              <p>
                Whether it&apos;s a sharp fade for the weekend, a clean lineup before
                an interview, or a full cut-and-beard combo, we treat every client like
                royalty. That&apos;s the{" "}
                <span className="text-[#C9A84C] font-medium">Crown De Balon</span> standard.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="slide-right">
            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: "✂", label: "Precision Cuts", desc: "Every line, every fade — perfected." },
                { icon: "🏆", label: "Premium Standard", desc: "Quality you can see and feel." },
                { icon: "⚡", label: "Efficient Service", desc: "In and out, looking great." },
                { icon: "💎", label: "Clean Environment", desc: "Sanitized tools. Always." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-dark-200 rounded-xl p-5 border border-white/5 hover:border-[#C9A84C]/30 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-xs text-white/40">{item.desc}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Team section */}
        <AnimateOnScroll variant="fade-up" className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            The Crew
          </p>
          <h3 className="font-display text-3xl sm:text-4xl font-bold">
            Meet the <span className="text-gold-gradient">Barbers</span>
          </h3>
        </AnimateOnScroll>

        <div ref={ref} className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {barbers.map((barber, i) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-dark-200 rounded-2xl p-7 border border-white/5 hover:border-[#C9A84C]/25 card-hover group"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-xl font-display font-bold text-dark flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E5C76B)" }}
                >
                  {barber.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">{barber.name}</div>
                  <div className="text-[#C9A84C] text-xs tracking-wide">{barber.title}</div>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-5">{barber.bio}</p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2">
                {barber.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full border border-[#C9A84C]/20 text-[#C9A84C]/80 bg-[#C9A84C]/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
