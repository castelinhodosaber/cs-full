"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type PhotoCard = {
  src: string;
  alt: string;
};

const INTERVAL_MS = 3400;

type PhotoCardsProps = {
  photos: readonly PhotoCard[];
  badge?: string;
  className?: string;
};

export function PhotoCards({ photos, badge, className }: PhotoCardsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [photos.length]);

  if (photos.length === 0) return null;

  const behind = [
    photos[(index + 2) % photos.length],
    photos[(index + 1) % photos.length],
  ];
  const top = photos[index];

  return (
    <div className={`relative mx-auto w-full max-w-md lg:max-w-none ${className ?? ""}`}>
      <div className="absolute -inset-3 -rotate-3 rounded-[2.5rem] bg-coral/40 blur-[2px]" />
      <div className="absolute -inset-2 rotate-2 rounded-[2.5rem] bg-yellow/50" />

      <div className="relative aspect-[3/4] w-full">
        {/* cartas de fundo (baralho) */}
        <div
          aria-hidden
          className="absolute inset-0 translate-y-4 rotate-[5deg] scale-[0.94] overflow-hidden rounded-[2.25rem] shadow-xl shadow-navy/10 ring-1 ring-white/60"
        >
          <Image
            src={behind[0].src}
            alt=""
            fill
            sizes="(max-width: 1024px) 90vw, 420px"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 translate-y-2 -rotate-[4deg] scale-[0.97] overflow-hidden rounded-[2.25rem] shadow-xl shadow-navy/15 ring-1 ring-white/70"
        >
          <Image
            src={behind[1].src}
            alt=""
            fill
            sizes="(max-width: 1024px) 90vw, 420px"
            className="object-cover"
          />
        </div>

        {/* carta do topo — sai como se passasse o baralho */}
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={top.src + index}
            className="absolute inset-0 z-10 overflow-hidden rounded-[2.25rem] shadow-2xl shadow-navy/25 ring-1 ring-white/80"
            initial={{ opacity: 0, rotate: 10, x: 56, scale: 0.98 }}
            animate={{ opacity: 1, rotate: 0, x: 0, scale: 1 }}
            exit={{
              opacity: 0,
              rotate: -16,
              x: -130,
              y: -8,
              scale: 0.94,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={top.src}
              alt={top.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {badge ? (
        <div className="animate-float-soft absolute -bottom-5 -left-3 z-20 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-lg sm:-left-6">
          {badge}
        </div>
      ) : null}
    </div>
  );
}
