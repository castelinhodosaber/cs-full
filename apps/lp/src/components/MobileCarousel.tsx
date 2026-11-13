"use client";

import {
  animate,
  motion,
  useMotionValue,
  type PanInfo,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const GAP = 16;

type MobileCarouselProps = {
  items: ReactNode[];
  className?: string;
  /** Shown from md breakpoint up when alwaysCarousel is false. */
  desktopClassName?: string;
  getSlideClassName?: (index: number) => string;
  ariaLabel: string;
  dotClassName?: string;
  /** Mantém carrossel horizontal (com arraste animado) em todos os tamanhos. */
  alwaysCarousel?: boolean;
};

export function MobileCarousel({
  items,
  className,
  desktopClassName = "md:grid md:grid-cols-3 md:gap-5",
  getSlideClassName,
  ariaLabel,
  dotClassName = "bg-coral",
  alwaysCarousel = false,
}: MobileCarouselProps) {
  if (alwaysCarousel) {
    return (
      <DragCarousel
        items={items}
        className={className}
        getSlideClassName={getSlideClassName}
        ariaLabel={ariaLabel}
        dotClassName={dotClassName}
      />
    );
  }

  return (
    <ResponsiveCarousel
      items={items}
      className={className}
      desktopClassName={desktopClassName}
      getSlideClassName={getSlideClassName}
      ariaLabel={ariaLabel}
      dotClassName={dotClassName}
    />
  );
}

function DragCarousel({
  items,
  className,
  getSlideClassName,
  ariaLabel,
  dotClassName,
}: {
  items: ReactNode[];
  className?: string;
  getSlideClassName?: (index: number) => string;
  ariaLabel: string;
  dotClassName: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [slideStep, setSlideStep] = useState(0);
  const x = useMotionValue(0);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const slide = viewport.querySelector<HTMLElement>("[data-slide]");
    if (!slide) return;
    // alinhado à esquerda — próximo card aparece à direita
    setSlideStep(slide.offsetWidth + GAP);
  }, []);

  useLayoutEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, [measure, items.length]);

  const snapTo = useCallback(
    (next: number, withSpring = true) => {
      const clamped = Math.max(0, Math.min(items.length - 1, next));
      setIndex(clamped);
      if (!slideStep) return;
      const target = -clamped * slideStep;
      if (withSpring) {
        animate(x, target, {
          type: "spring",
          stiffness: 260,
          damping: 30,
          mass: 0.9,
        });
      } else {
        x.set(target);
      }
    },
    [items.length, slideStep, x],
  );

  useEffect(() => {
    if (!slideStep) return;
    snapTo(indexRef.current, true);
  }, [slideStep, snapTo]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (!slideStep) return;
    // posição atual + inércia do gesto → slide alvo
    const projectedX = x.get() + info.velocity.x * 0.28;
    let next = Math.round(-projectedX / slideStep);

    // swipe curto mas decidido: garante pelo menos 1 card
    if (next === indexRef.current) {
      if (info.velocity.x < -450 || info.offset.x < -slideStep * 0.18) {
        next = indexRef.current + 1;
      } else if (info.velocity.x > 450 || info.offset.x > slideStep * 0.18) {
        next = indexRef.current - 1;
      }
    }

    snapTo(next, true);
  };

  const maxDrag = slideStep
    ? -Math.max(0, items.length - 1) * slideStep
    : 0;

  return (
    <div className={className}>
      {/* py cria folga p/ hover/scale sem cortar o card; -my compensa o espaço externo */}
      <div
        ref={viewportRef}
        className="-my-4 overflow-hidden py-4"
        aria-label={ariaLabel}
        role="region"
      >
        <motion.div
          className="flex cursor-grab touch-pan-y gap-4 active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: maxDrag, right: 0 }}
          dragElastic={0.22}
          dragMomentum={false}
          onDragEnd={onDragEnd}
          whileDrag={{ cursor: "grabbing" }}
        >
          {items.map((item, itemIndex) => (
            <motion.div
              key={itemIndex}
              data-slide
              className={`w-[min(78vw,22rem)] shrink-0 origin-center ${getSlideClassName?.(itemIndex) ?? ""}`}
              animate={{
                scale: itemIndex === index ? 1 : 0.96,
                opacity: itemIndex === index ? 1 : 0.78,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dots
        count={items.length}
        active={index}
        ariaLabel={ariaLabel}
        dotClassName={dotClassName}
        onSelect={(i) => snapTo(i, true)}
      />
    </div>
  );
}

function ResponsiveCarousel({
  items,
  className,
  desktopClassName,
  getSlideClassName,
  ariaLabel,
  dotClassName,
}: {
  items: ReactNode[];
  className?: string;
  desktopClassName: string;
  getSlideClassName?: (index: number) => string;
  ariaLabel: string;
  dotClassName: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    if (!slide) return;
    const slideWidth = slide.offsetWidth + GAP;
    if (slideWidth <= 0) return;
    const next = Math.round(el.scrollLeft / slideWidth);
    setActive(Math.max(0, Math.min(items.length - 1, next)));
  }, [items.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncActive();
    el.addEventListener("scroll", syncActive, { passive: true });
    return () => el.removeEventListener("scroll", syncActive);
  }, [syncActive]);

  const goTo = (next: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    if (!slide) return;
    const slideWidth = slide.offsetWidth + GAP;
    el.scrollTo({ left: slideWidth * next, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={scrollerRef}
        className={`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden ${desktopClassName}`}
        aria-label={ariaLabel}
        role="region"
      >
        {items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            data-slide
            className={`w-[min(85vw,22rem)] shrink-0 snap-center md:w-auto md:min-w-0 md:shrink ${getSlideClassName?.(itemIndex) ?? ""}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Dots
          count={items.length}
          active={active}
          ariaLabel={ariaLabel}
          dotClassName={dotClassName}
          onSelect={goTo}
        />
      </div>
    </div>
  );
}

function Dots({
  count,
  active,
  ariaLabel,
  dotClassName,
  onSelect,
}: {
  count: number;
  active: number;
  ariaLabel: string;
  dotClassName: string;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      className="mt-5 flex items-center justify-center gap-2"
      role="tablist"
      aria-label={`Navegação: ${ariaLabel}`}
    >
      {Array.from({ length: count }, (_, itemIndex) => (
        <button
          key={itemIndex}
          type="button"
          role="tab"
          aria-selected={active === itemIndex}
          aria-label={`Ir para item ${itemIndex + 1}`}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            active === itemIndex
              ? `w-7 ${dotClassName}`
              : "w-2.5 bg-navy/20 hover:bg-navy/35"
          }`}
          onClick={() => onSelect(itemIndex)}
        />
      ))}
    </div>
  );
}
