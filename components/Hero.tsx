"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-dark z-0" />

      {/* Radial gradient spotlight */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Decorative lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-px h-40 opacity-20"
          style={{ background: "linear-gradient(180deg, #C9A84C, transparent)" }}
        />
        <div
          className="absolute top-0 left-0 h-px w-40 opacity-20"
          style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-px h-40 opacity-20"
          style={{ background: "linear-gradient(0deg, #C9A84C, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-px w-40 opacity-20"
          style={{ background: "linear-gradient(270deg, #C9A84C, transparent)" }}
        />
      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full border border-[#C9A84C]/10 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full border border-[#C9A84C]/5 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Scissors icon watermark */}
      <div
        className="absolute opacity-[0.03] text-[#C9A84C] z-0 select-none pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ fontSize: "40vw", lineHeight: 1 }}
      >
        ✂
      </div>

      {/* Content — flex-1 fills height, pt clears the 72px navbar, pb clears the scroll indicator */}
      <div className="flex-1 flex items-center justify-center relative z-10 pt-[100px] pb-28 px-5">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 text-[#C9A84C] text-xs tracking-widest uppercase font-semibold mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            Toronto, ON · Walk-ins Welcome
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-6"
          >
            Crown{" "}
            <span className="text-gold-gradient">De</span>
            <br />
            <span className="text-gold-gradient">Balon</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex justify-center mb-6"
          >
            <div className="section-divider" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="text-base sm:text-xl md:text-2xl text-white/60 tracking-[0.1em] sm:tracking-[0.15em] uppercase font-light mb-12"
          >
            Premium Cuts.{" "}
            <span className="text-white/80">Clean Style.</span>{" "}
            <span className="text-[#C9A84C]">Confidence.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="tel:4376962005" className="btn-gold text-sm w-full sm:w-auto justify-center">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now · 437-696-2005
            </a>
            <button
              onClick={() => scrollTo("#services")}
              className="btn-ghost text-sm w-full sm:w-auto justify-center"
            >
              View Services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex items-center justify-center gap-6 sm:gap-16 mt-16 pt-10 border-t border-white/5"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "1K+", label: "Happy Clients" },
              { value: "6", label: "Services Offered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#C9A84C]">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-white/40 tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — always at the very bottom, clear of stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => scrollTo("#about")}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#C9A84C] opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
