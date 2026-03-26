"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function MapSection() {
  return (
    <section id="map" className="relative py-28 sm:py-36 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimateOnScroll variant="fade-up" className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Find Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="text-gold-gradient">Location</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="section-divider" />
          </div>
          <p className="text-white/50 text-lg">
            Located in{" "}
            <span className="text-white font-medium">Toronto, Ontario</span>. Easy
            transit access, convenient parking nearby.
          </p>
        </AnimateOnScroll>

        {/* Map + info */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Info cards */}
          <AnimateOnScroll variant="slide-left" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
            {[
              {
                icon: "📍",
                label: "Address",
                value: "Toronto, ON",
                sub: "Canada",
              },
              {
                icon: "📞",
                label: "Phone",
                value: "437-696-2005",
                sub: "Call or text anytime",
                href: "tel:4376962005",
              },
              {
                icon: "🚇",
                label: "Transit",
                value: "TTC Accessible",
                sub: "Multiple bus & subway routes nearby",
              },
              {
                icon: "🅿",
                label: "Parking",
                value: "Street Parking",
                sub: "Available on surrounding streets",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-dark-200 rounded-xl p-5 border border-white/5 hover:border-[#C9A84C]/25 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium text-sm hover:text-[#C9A84C] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium text-sm">{item.value}</div>
                    )}
                    <div className="text-white/40 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </AnimateOnScroll>

          {/* Map embed */}
          <AnimateOnScroll variant="zoom-in" className="lg:col-span-2">
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10">
              {/* Overlay border accent */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-[#C9A84C]/20 z-10 pointer-events-none" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57483849478!2d-79.54286403789665!3d43.71807613050516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crown De Balon location map"
                className="absolute inset-0"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
