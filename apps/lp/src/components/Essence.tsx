"use client";

import { motion } from "framer-motion";
import { differentials, essenceCards } from "@/lib/site";
import { PhotoCards } from "./PhotoCards";
import { Reveal } from "./Reveal";

export function Essence() {
  return (
    <section id="essencia" className="relative overflow-hidden bg-sky-atmosphere py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-24 size-56 rounded-full bg-yellow/30 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-10 size-64 rounded-full bg-pink/25 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-navy-soft/70">
            nosso jeito
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl lg:text-5xl">
            Aqui a infância é vivida com alegria — e com intenção.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            No Castelinho do Saber, cada criança é vista no seu tempo. Acreditamos
            que educar é cuidar, brincar, estimular e construir vínculos que
            fazem a criança se sentir segura para aprender.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {differentials.map((item, index) => (
              <motion.li
                key={item.title}
                className="cursor-pointer rounded-3xl bg-white/55 p-5 backdrop-blur-sm ring-1 ring-transparent transition will-change-transform"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.05 * index, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.88)",
                  boxShadow: "0 18px 40px -24px rgba(11,27,77,0.35)",
                }}
                whileTap={{ scale: 0.985, y: -2 }}
              >
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <PhotoCards photos={essenceCards} badge="4 meses a 5 anos" />
        </Reveal>
      </div>
    </section>
  );
}
