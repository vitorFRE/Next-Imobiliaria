import { WHATSAPP_HREF } from "@/modules/core/constants/contact"

export function ContactClosingCta() {
  return (
    <section className="bg-luxury-band px-6 py-32 md:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-8 font-heading text-4xl font-bold tracking-tight text-primary uppercase md:text-5xl">
          Quer falar sobre imóveis?
        </h2>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex h-auto items-center justify-center bg-primary px-12 py-5 font-heading text-xs font-bold tracking-widest text-primary-foreground uppercase transition-colors hover:bg-muted-foreground"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  )
}
