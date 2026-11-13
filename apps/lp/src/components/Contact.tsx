import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="bg-sky-atmosphere py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-navy-soft/70">
            contato e localização
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
            Estamos no Jardim Terra Branca
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Venha tomar um café conosco e conhecer o Castelinho de perto.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <InfoCard title="Endereço">
              <p>
                {site.address.street}
                <br />
                {site.address.neighborhood}
                <br />
                {site.address.city}
                <br />
                CEP {site.address.cep}
              </p>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-bold text-coral hover:underline"
              >
                Abrir no Google Maps
              </a>
            </InfoCard>
          </Reveal>
          <Reveal delay={0.05}>
            <InfoCard title="WhatsApp">
              <a
                href={site.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-navy hover:underline"
              >
                Agendar visita
              </a>
            </InfoCard>
          </Reveal>
          <Reveal delay={0.1}>
            <InfoCard title="Telefone">
              <a href={`tel:${site.phoneTel}`} className="font-bold text-navy hover:underline">
                {site.phone}
              </a>
            </InfoCard>
          </Reveal>
          <Reveal delay={0.15}>
            <InfoCard title="Instagram">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-navy hover:underline"
              >
                {site.instagram.handle}
              </a>
            </InfoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="h-full rounded-[1.75rem] bg-white/70 p-6 backdrop-blur-sm">
      <h3 className="font-display text-xl text-navy">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-ink-muted">{children}</div>
    </div>
  );
}
