"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
};

/**
 * Carrega o mp4 perto da viewport e força autoplay muted.
 * Em produção o play() precisa esperar o src/canplay — no localhost a rede
 * mascara a corrida. Safari também exige muted como propriedade no DOM.
 */
export function LazyVideo({ src, poster, alt, className }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "280px 0px", threshold: 0.01 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !shouldLoad) return;

    const unlockMute = () => {
      el.muted = true;
      el.defaultMuted = true;
      el.setAttribute("muted", "");
      el.playsInline = true;
    };

    const tryPlay = () => {
      unlockMute();
      const p = el.play();
      if (p) void p.catch(() => {});
    };

    unlockMute();
    if (el.networkState === HTMLMediaElement.NETWORK_EMPTY) {
      el.load();
    }

    el.addEventListener("loadeddata", tryPlay);
    el.addEventListener("canplay", tryPlay);
    tryPlay();

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) tryPlay();
        else el.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    return () => {
      el.removeEventListener("loadeddata", tryPlay);
      el.removeEventListener("canplay", tryPlay);
      io.disconnect();
    };
  }, [shouldLoad, src]);

  return (
    <video
      ref={ref}
      className={className}
      src={shouldLoad ? src : undefined}
      poster={poster}
      muted
      autoPlay={shouldLoad}
      loop
      playsInline
      preload={shouldLoad ? "auto" : "none"}
      aria-label={alt}
      draggable={false}
      disablePictureInPicture
      disableRemotePlayback
    />
  );
}
