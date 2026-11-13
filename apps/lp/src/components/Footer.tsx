import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#071239] py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-full ring-2 ring-white/20"
          />
          <div>
            <p className="font-display text-xl">{site.name}</p>
            <p className="text-sm text-white/65">{site.tagline}</p>
          </div>
        </div>
        <div className="text-sm text-white/65">
          <p>
            {site.address.street} · {site.address.neighborhood}
          </p>
          <p>
            {site.address.city} ·{" "}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline decoration-white/30 underline-offset-2 transition hover:text-white"
            >
              {site.instagram.handle}
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-4 pt-6 text-xs text-white/45 sm:px-6">
        © 2026 {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
