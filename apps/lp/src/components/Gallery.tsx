"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery, site } from "@/lib/site";
import { LazyVideo } from "./LazyVideo";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";

type GalleryItem = (typeof gallery)[number];

function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function Gallery() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [items, setItems] = useState<GalleryItem[]>(() =>
    gallery.filter((item) => !("desktopOnly" in item && item.desktopOnly)),
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      const desktop = mq.matches;
      setIsDesktop(desktop);
      const pool = gallery.filter(
        (item) => !("desktopOnly" in item && item.desktopOnly) || desktop,
      );
      setItems(shuffle(pool));
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section
      id="espacos"
      className="relative overflow-hidden bg-sky-atmosphere py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-16 size-24 animate-float-soft rounded-full bg-pink/30 blur-xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[12%] top-28 size-16 animate-float-soft-delayed rounded-full bg-yellow/40 blur-lg"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-navy-soft/70">
              nossos espaços
            </p>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
              Ambientes que acolhem e inspiram
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              Salas, brincar e cantinhos pensados para a infância — com segurança,
              cor e muito afeto. Mais no Instagram{" "}
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy underline decoration-coral/70 underline-offset-4 transition hover:text-coral"
              >
                {site.instagram.handle}
              </a>
              .
            </p>
          </div>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-bold text-white shadow-lg shadow-navy/20 transition hover:-translate-y-0.5 hover:bg-navy-soft"
          >
            Seguir no Instagram
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <MobileCarousel
            key={isDesktop ? "desktop" : "mobile"}
            ariaLabel="Fotos e vídeos da escola"
            alwaysCarousel
            items={items.map((item, index) => (
              <figure
                key={`${item.src}-${index}`}
                className="group relative h-full overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_50px_-28px_rgba(11,27,77,0.4)] ring-1 ring-white/80"
              >
                {item.type === "video" ? (
                  <LazyVideo
                    className="aspect-[4/5] w-full object-cover"
                    src={item.src}
                    poster={"poster" in item ? item.poster : undefined}
                    alt={item.alt}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={640}
                    height={800}
                    sizes="(max-width: 768px) 78vw, 22rem"
                    loading="lazy"
                    draggable={false}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                )}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/75 via-navy/20 to-transparent p-4 pt-14 text-sm font-semibold text-white">
                  {item.alt}
                </figcaption>
              </figure>
            ))}
          />
        </Reveal>
      </div>
    </section>
  );
}
