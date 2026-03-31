import { IconBrandWhatsapp } from "@tabler/icons-react"

import { whatsAppLinkForProperty } from "@/modules/listings/utils/whatsapp-property-link"

type PropertyStickyWhatsappProps = {
  title: string
  price: string
}

export function PropertyStickyWhatsapp({
  title,
  price,
}: PropertyStickyWhatsappProps) {
  const href = whatsAppLinkForProperty(title)

  return (
    <div className="sticky top-32 border border-border/20 bg-luxury-band p-8 text-center md:p-10">
      <div className="mb-10">
        <h3 className="mb-2 font-heading text-2xl font-bold tracking-tight text-primary uppercase">
          Interessado neste imóvel?
        </h3>
        <p className="mb-4 font-heading text-lg font-bold text-primary">{price}</p>
        <p className="font-sans text-sm leading-relaxed text-muted-foreground">
          Nossa equipe está pronta para tirar dúvidas e agendar visitas pelo
          WhatsApp.
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex w-full items-center justify-center gap-4 bg-[#25D366] px-8 py-6 text-lg font-bold tracking-widest text-white uppercase transition-all hover:scale-[1.02] hover:bg-[#20ba5a]"
      >
        <IconBrandWhatsapp className="size-8 shrink-0" stroke={1.5} />
        Agendar via WhatsApp
      </a>
    </div>
  )
}
