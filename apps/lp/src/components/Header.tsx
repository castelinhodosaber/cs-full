"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (event.target instanceof Node && !root.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <header
      ref={rootRef}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 shadow-[0_12px_40px_-18px_rgba(11,27,77,0.45)] backdrop-blur-xl transition-all duration-300 sm:rounded-full sm:px-4 sm:py-2 ${
          scrolled || open
            ? "border-white/70 bg-white/92"
            : "border-white/55 bg-white/78"
        }`}
      >
        <a href="#topo" className="flex min-w-0 items-center gap-2.5 text-navy">
          <span className="relative shrink-0 overflow-hidden rounded-full ring-2 ring-sky/40 shadow-sm">
            <Image
              src="/images/logo.jpg"
              alt=""
              width={44}
              height={44}
              className="size-10 object-cover sm:size-11"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-base leading-tight sm:text-lg">
              Castelinho do Saber
            </span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted sm:block">
              Educação Infantil · Bauru
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-navy/75 transition hover:bg-sky-mist hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-coral px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-coral/25 transition hover:-translate-y-0.5 hover:bg-coral-deep"
          >
            Agendar visita
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer rounded-full bg-yellow px-3 py-2 text-xs font-bold text-navy shadow-sm"
          >
            Visita
          </a>
          <button
            type="button"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-navy text-white shadow-sm transition hover:bg-navy-soft"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1">
              <span
                className={`h-0.5 w-full origin-center bg-white transition duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-white transition duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full origin-center bg-white transition duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="menu-mobile"
            key="menu-mobile"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                  className="cursor-pointer rounded-2xl px-3 py-3 font-display text-xl text-navy transition hover:bg-sky-mist"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={site.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * navLinks.length, duration: 0.25 }}
                className="mt-3 inline-flex cursor-pointer items-center justify-center rounded-full bg-coral px-5 py-3.5 font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Agendar visita
              </motion.a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
