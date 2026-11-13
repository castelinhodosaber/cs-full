"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides, site } from "@/lib/site";

const HERO_INTERVAL_MS = 6500;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, HERO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[index] ?? heroSlides[0];

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-white"
      aria-roledescription="carrossel"
      aria-label="Fotos da escola"
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: HERO_INTERVAL_MS / 1000,
              ease: "linear",
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#071239]/92 via-[#0b1b4d]/45 to-[#0b1b4d]/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(246,196,69,0.22),transparent_40%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            className="mb-6 flex items-center gap-4"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Logo Castelinho do Saber"
              width={88}
              height={88}
              className="size-16 rounded-full shadow-xl ring-4 ring-white/30 sm:size-20"
              priority
            />
            <div>
              <p className="font-display text-2xl leading-none tracking-wide sm:text-3xl">
                Castelinho do Saber
              </p>
              <p className="mt-1 text-sm font-semibold text-sky-mist/90 sm:text-base">
                Educação Infantil · {site.city}
              </p>
            </div>
          </motion.div>

          <h1 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Um lugar que valoriza a infância.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Turmas de {site.ages}, com carinho, brincar e descobertas todos os
            dias — no Jardim Terra Branca, em Bauru.
          </p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <a
              href={site.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-base font-bold text-navy shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:brightness-105"
            >
              <WhatsAppIcon className="size-5" />
              {site.whatsapp.label}
            </a>
            <a
              href="#turmas"
              className="inline-flex items-center justify-center rounded-full glass-pill px-6 py-3.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/25"
            >
              Conhecer as turmas
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.44ZM12.07 21.15h-.01a9.23 9.23 0 0 1-4.7-1.29l-.34-.2-3.74.98 1-3.64-.22-.37a9.24 9.24 0 0 1-1.42-4.93c0-5.1 4.15-9.25 9.26-9.25a9.2 9.2 0 0 1 6.55 2.71 9.2 9.2 0 0 1 2.71 6.55c0 5.1-4.15 9.24-9.24 9.24Zm5.07-6.92c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.3s.99 2.67 1.12 2.85c.14.18 1.95 2.98 4.72 4.18.66.28 1.18.46 1.58.58.66.2 1.27.18 1.75.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32Z" />
    </svg>
  );
}
