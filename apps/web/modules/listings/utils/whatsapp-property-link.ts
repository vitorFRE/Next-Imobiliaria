import { WHATSAPP_HREF } from "@/modules/core/constants/contact"

export function whatsAppLinkForProperty(title: string): string {
  try {
    const u = new URL(WHATSAPP_HREF)
    u.searchParams.set("text", `Olá! Tenho interesse em: ${title}`)
    return u.toString()
  } catch {
    return WHATSAPP_HREF
  }
}
