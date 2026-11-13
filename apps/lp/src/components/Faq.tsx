"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-[#f7fbff] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-navy-soft/70">
            dúvidas frequentes
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
            Antes de visitar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Não achou sua pergunta? Chama no WhatsApp que a gente responde.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={item.q} delay={index * 0.04}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-navy/5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="font-display text-lg text-navy">{item.q}</span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-mist text-navy transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="border-t border-sky-mist px-5 py-4 text-sm leading-relaxed text-ink-muted">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
