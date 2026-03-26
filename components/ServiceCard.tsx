"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  index: number;
  inView: boolean;
}

export default function ServiceCard({
  image,
  name,
  price,
  description,
  index,
  inView,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative bg-dark-200 border border-white/5 rounded-2xl overflow-hidden
                 hover:border-[#C9A84C]/30 transition-all duration-300 card-hover"
    >
      {/* Photo header */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay so price badge is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 via-transparent to-dark/30" />

        {/* Price badge */}
        <div className="absolute top-3 right-3 font-display text-base font-bold text-[#C9A84C]
                        bg-dark/75 backdrop-blur-sm px-3 py-1 rounded-full border border-[#C9A84C]/40">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)",
          }}
        />

        <h3 className="font-semibold text-white text-lg mb-2 relative z-10
                       group-hover:text-[#C9A84C] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed relative z-10">{description}</p>
      </div>

      {/* Bottom line accent */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
      />
    </motion.div>
  );
}
