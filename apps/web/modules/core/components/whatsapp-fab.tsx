import { IconBrandWhatsapp } from "@tabler/icons-react"

import { WHATSAPP_HREF } from "@/modules/core/constants/contact"

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex size-14 items-center justify-center bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 md:right-10 md:bottom-10"
    >
      <IconBrandWhatsapp className="size-8" stroke={1.5} aria-hidden />
    </a>
  )
}
