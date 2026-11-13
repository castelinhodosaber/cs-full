import Image from "next/image";
import { enrollmentSteps, site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Enrollment() {
  return (
    <section id="matriculas" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-mist via-white to-[#ffe8d6]" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[-20%] size-[28rem] rounded-full bg-yellow/35 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-navy">
            <span className="size-2 rounded-full bg-green" aria-hidden />
            Matrículas abertas
          </p>
          <h2 className="mt-4 font-display text-3xl text-navy sm:text-4xl lg:text-5xl">
            Venha conhecer o Castelinho
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            A melhor forma de escolher uma escola é sentir o ambiente. Agende uma
            visita e veja de perto como cuidamos da infância.
          </p>

          <ol className="mt-8 space-y-4">
            {enrollmentSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={site.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-coral px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-coral/30 transition hover:bg-coral-deep"
          >
            Quero agendar minha visita
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative hidden md:block">
          <div className="blob absolute inset-6 bg-sky/40" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-navy/15">
            {/* print 2 — só desktop */}
            <Image
              src="/images/sections/enrollment.jpg"
              alt="Crianças brincando na caixa de areia do Castelinho"
              width={800}
              height={1067}
              className="aspect-[3/4] h-auto w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
