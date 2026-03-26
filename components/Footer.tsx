"use client";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display text-2xl font-bold mb-3">
              Crown <span className="text-gold-gradient">De Balon</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Toronto&apos;s premier destination for precision cuts, clean fades, and
              confident style. Walk-ins always welcome.
            </p>
            <a
              href="tel:4376962005"
              className="inline-flex items-center gap-2 mt-5 text-[#C9A84C] font-semibold text-sm hover:text-[#E5C76B] transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              437-696-2005
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs text-white/40 uppercase tracking-[0.2em] font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours quick reference */}
          <div>
            <h4 className="text-xs text-white/40 uppercase tracking-[0.2em] font-semibold mb-5">
              Quick Hours
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-white/40">9 AM – 7 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-white/40">10 AM – 6 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-white/40">9 AM – 4 PM</span>
              </li>
            </ul>
            <div className="mt-5 text-xs text-white/30">📍 Toronto, ON</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Crown De Balon. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Toronto, Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
