function buildWhatsAppHref(): string {
  const raw =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ??
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE ??
    "5511999999999"
  if (raw.startsWith("http")) return raw
  const digits = raw.replace(/\D/g, "")
  return `https://wa.me/${digits}`
}

export const WHATSAPP_HREF = buildWhatsAppHref()
