import { site } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={site.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Conversar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.44ZM12.07 21.15h-.01a9.23 9.23 0 0 1-4.7-1.29l-.34-.2-3.74.98 1-3.64-.22-.37a9.24 9.24 0 0 1-1.42-4.93c0-5.1 4.15-9.25 9.26-9.25a9.2 9.2 0 0 1 6.55 2.71 9.2 9.2 0 0 1 2.71 6.55c0 5.1-4.15 9.24-9.24 9.24Zm5.07-6.92c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.3s.99 2.67 1.12 2.85c.14.18 1.95 2.98 4.72 4.18.66.28 1.18.46 1.58.58.66.2 1.27.18 1.75.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32Z" />
      </svg>
    </a>
  );
}
