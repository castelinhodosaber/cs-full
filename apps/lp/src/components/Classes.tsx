"use client";

import { motion } from "framer-motion";
import { classes } from "@/lib/site";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";

const accents = [
  { dot: "bg-coral", soft: "from-coral/15 to-white" },
  { dot: "bg-sky", soft: "from-sky/20 to-white" },
  { dot: "bg-green", soft: "from-green/15 to-white" },
] as const;

export function Classes() {
  return (
    <section id="turmas" className="relative overflow-hidden bg-[#f7fbff] py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 size-56 animate-blob-drift rounded-full bg-sky/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-8 size-64 animate-blob-drift-delayed rounded-full bg-yellow/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-navy-soft/70">
            etapas
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
            Cada fase tem seu tempo. Cada conquista tem seu valor.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Do primeiro acolhimento no berçário às descobertas do pré, acompanhamos
            o desenvolvimento com olhar atento e rotina cheia de sentido.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <MobileCarousel
            ariaLabel="Etapas de ensino"
            alwaysCarousel
            items={classes.map((item, index) => {
              const accent = accents[index % accents.length];
              return (
                <motion.article
                  key={item.name}
                  className={`h-full cursor-pointer rounded-[1.75rem] bg-gradient-to-br ${accent.soft} p-6 shadow-[0_18px_50px_-28px_rgba(11,27,77,0.35)] ring-1 ring-navy/5`}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 24px 60px -24px rgba(11,27,77,0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                >
                  <span
                    className={`inline-block size-3 rounded-full ${accent.dot}`}
                    aria-hidden
                  />
                  <h3 className="mt-4 font-display text-2xl text-navy">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-coral">{item.age}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          />
        </Reveal>
      </div>
    </section>
  );
}
