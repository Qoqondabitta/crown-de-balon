"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const hours = [
  { day: "Monday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Tuesday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Wednesday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Thursday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Friday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Saturday", time: "10:00 AM – 6:00 PM", open: true },
  { day: "Sunday", time: "9:00 AM – 4:00 PM", open: true },
];

function getTodayDay() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[new Date().getDay()];
}

export default function Hours() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const today = getTodayDay();

  return (
    <section id="hours" className="relative py-28 sm:py-36 bg-dark-100 overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ border: "1px solid #C9A84C" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div>
            <AnimateOnScroll variant="fade-up">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                When To Visit
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Opening{" "}
                <span className="text-gold-gradient">Hours</span>
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Walk-ins are welcome. No appointment needed — just show up and we&apos;ll
                get you sorted. Come early on weekends to avoid a wait.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse flex-shrink-0" />
                <div>
                  <span className="text-[#C9A84C] font-semibold text-sm">Walk-ins Welcome</span>
                  <span className="text-white/50 text-sm"> · Call ahead for priority service</span>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.2} className="mt-6">
              <a href="tel:4376962005" className="btn-gold inline-flex">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                437-696-2005
              </a>
            </AnimateOnScroll>
          </div>

          {/* Right: hours table */}
          <div ref={ref}>
            <div className="bg-dark-200 rounded-2xl border border-white/5 overflow-hidden">
              {hours.map((item, i) => {
                const isToday = item.day === today;
                return (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                    className={`flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/5 last:border-0 transition-colors duration-200
                      ${isToday ? "bg-[#C9A84C]/8" : "hover:bg-white/[0.02]"}`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <div className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      )}
                      <span
                        className={`font-medium text-sm ${
                          isToday ? "text-[#C9A84C]" : "text-white/80"
                        }`}
                      >
                        {item.day}
                      </span>
                      {isToday && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] font-medium">
                          Today
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        item.open
                          ? isToday
                            ? "text-[#C9A84C]"
                            : "text-white/60"
                          : "text-red-400/70"
                      }`}
                    >
                      {item.time}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
