"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
};

/** Só baixa/toca o vídeo quando entra (ou chega perto) da tela. */
export function LazyVideo({ src, poster, alt, className }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          el.pause();
          return;
        }
        setActive(true);
        void el.play().catch(() => {
          /* autoplay bloqueado — poster permanece */
        });
      },
      { rootMargin: "200px 0px", threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={active ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      draggable={false}
    />
  );
}
