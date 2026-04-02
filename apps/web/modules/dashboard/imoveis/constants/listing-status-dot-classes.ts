/** Alinhado ao enum do schema: disponivel | oculto | vendido */
export const LISTING_STATUS_DOT_CLASSES = {
  disponivel: "bg-emerald-500 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
  oculto: "bg-amber-500 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
  vendido: "bg-sky-500 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
} as const

export type ListingStatusDotKey = keyof typeof LISTING_STATUS_DOT_CLASSES
