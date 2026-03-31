import { WHATSAPP_HREF } from "@/modules/core/constants/contact"

/** Google Maps embed (output=embed). Override com NEXT_PUBLIC_MAP_EMBED_URL se preferir outro ponto. */
export const DEFAULT_MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Av.%20Brigadeiro%20Faria%20Lima%2C%204500%20Itaim%20Bibi%20S%C3%A3o%20Paulo&hl=pt&z=16&output=embed"

export function getMapEmbedSrc(): string {
  return process.env.NEXT_PUBLIC_MAP_EMBED_URL ?? DEFAULT_MAP_EMBED_SRC
}

export const CONTACT_DIRECT_CHANNELS = [
  { label: "WhatsApp Business", href: WHATSAPP_HREF },
  {
    label: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "#",
  },
  {
    label: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#",
  },
] as const

export const CONTACT_OFFICES = [
  {
    title: "Escritório principal",
    lines: ["Rua Oscar Freire, 1100", "Jardins, São Paulo - SP"],
    note: "Segunda a Sábado, 10h às 19h",
    variant: "outline" as const,
  },
] as const
