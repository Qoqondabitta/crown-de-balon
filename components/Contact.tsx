"use client";

import { useState, FormEvent } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    // Opens WhatsApp with the message pre-filled — sends directly to the barbershop's phone
    const text = encodeURIComponent(
      `Hi! My name is ${form.name.trim()}.\n\n${form.message.trim()}`
    );
    window.open(`https://wa.me/14376962005?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-dark-100 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimateOnScroll variant="fade-up" className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Contact{" "}
            <span className="text-gold-gradient">Us</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="section-divider" />
          </div>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Questions? Comments? Want to book a group session? Reach out — we&apos;re
            always happy to help.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Left: info + call button */}
          <AnimateOnScroll variant="slide-left">
            <div className="space-y-8">
              {/* Call CTA */}
              <div className="bg-dark-200 rounded-2xl p-8 border border-white/5">
                <h3 className="font-display text-2xl font-bold mb-2">
                  Prefer to <span className="text-[#C9A84C]">call?</span>
                </h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  The fastest way to reach us. Call or text and we&apos;ll confirm
                  availability right away.
                </p>
                <a href="tel:4376962005" className="btn-gold w-full justify-center text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call · 437-696-2005
                </a>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {[
                  {
                    icon: "📞",
                    label: "Phone / Text",
                    value: "437-696-2005",
                    href: "tel:4376962005",
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    value: "Toronto, ON, Canada",
                  },
                  {
                    icon: "🕐",
                    label: "Hours",
                    value: "Mon–Fri 9–7 · Sat 10–6 · Sun Closed",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center text-base flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white text-sm font-medium hover:text-[#C9A84C] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white text-sm font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: form */}
          <AnimateOnScroll variant="slide-right">
            {submitted ? (
              <div className="bg-dark-200 rounded-2xl p-10 border border-[#C9A84C]/20 text-center h-full flex flex-col items-center justify-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-[#C9A84C]">
                  WhatsApp Opening!
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Your message was pre-filled in WhatsApp,{" "}
                  <strong className="text-white">{form.name}</strong>. Just hit send
                  in the app. Or call us directly at{" "}
                  <a href="tel:4376962005" className="text-[#C9A84C] hover:underline">
                    437-696-2005
                  </a>
                  .
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", message: "" }); }}
                  className="btn-ghost text-xs py-2 px-5 mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-dark-200 rounded-2xl p-8 border border-white/5 space-y-5"
              >
                <h3 className="font-display text-xl font-bold mb-2">
                  Send a <span className="text-[#C9A84C]">Message</span>
                </h3>
                <p className="text-white/30 text-xs mb-6">
                  Opens WhatsApp — message goes straight to our phone.
                </p>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs text-white/50 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-dark-300 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm
                               placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1
                               focus:ring-[#C9A84C]/20 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs text-white/50 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    placeholder="Hi, I'd like to book a fade cut this Saturday..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-dark-300 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm
                               placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1
                               focus:ring-[#C9A84C]/20 transition-all duration-200 resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center">
                  {/* WhatsApp icon */}
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="text-center text-white/30 text-xs">
                  Or call us directly at{" "}
                  <a href="tel:4376962005" className="text-[#C9A84C] hover:underline">
                    437-696-2005
                  </a>
                </p>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
