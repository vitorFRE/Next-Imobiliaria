import { desc } from "drizzle-orm"

import { db } from "@/db/client"
import { listing } from "@/db/schemas/listing-schema"
import { formatListingPriceBrl } from "@/modules/listings/utils/format-listing-price"
import type {
  ListingAdminRow,
  ListingAdminStat,
  ListingAdminStatus,
  ListingMonthlyCount,
  ListingStatusCounts,
} from "@/modules/dashboard/imoveis/types/listings-admin"

const PT_MONTHS = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez",
]

function mapDbStatus(
  s: "disponivel" | "oculto" | "vendido"
): ListingAdminStatus {
  if (s === "disponivel") return "available"
  if (s === "oculto") return "hidden"
  return "sold"
}

function shortListingCode(id: string): string {
  return id.replace(/-/g, "").slice(0, 8).toUpperCase()
}

function computeMonthlyData(
  rows: Array<{ createdAt: Date }>
): ListingMonthlyCount[] {
  const now = new Date()
  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1)
    const year = d.getFullYear()
    const month = d.getMonth()
    return {
      month: PT_MONTHS[month] ?? "",
      count: rows.filter((r) => {
        const c = new Date(r.createdAt)
        return c.getFullYear() === year && c.getMonth() === month
      }).length,
    }
  })
}

export async function getAdminListingsOverview(): Promise<{
  rows: ListingAdminRow[]
  stats: ListingAdminStat[]
  statusCounts: ListingStatusCounts
  monthlyData: ListingMonthlyCount[]
}> {
  const dbRows = await db
    .select({
      id: listing.id,
      title: listing.title,
      priceBrl: listing.priceBrl,
      cityState: listing.cityState,
      status: listing.status,
      coverImageUrl: listing.coverImageUrl,
      createdAt: listing.createdAt,
    })
    .from(listing)
    .orderBy(desc(listing.createdAt))

  let totalDisponivel = 0
  let totalOculto = 0
  let totalVendido = 0
  let sumPriceDisponivel = 0

  for (const r of dbRows) {
    if (r.status === "disponivel") {
      totalDisponivel += 1
      sumPriceDisponivel += r.priceBrl
    } else if (r.status === "oculto") {
      totalOculto += 1
    } else if (r.status === "vendido") {
      totalVendido += 1
    }
  }

  const stats: ListingAdminStat[] = [
    { label: "Total no catálogo", value: String(dbRows.length) },
    { label: "Disponíveis", value: String(totalDisponivel) },
    { label: "Ocultos", value: String(totalOculto) },
    { label: "Valor em carteira", value: formatListingPriceBrl(sumPriceDisponivel) },
  ]

  const statusCounts: ListingStatusCounts = {
    disponivel: totalDisponivel,
    oculto: totalOculto,
    vendido: totalVendido,
  }

  const adminRows: ListingAdminRow[] = dbRows.map((r) => ({
    title: r.title,
    listingId: r.id,
    listingCode: shortListingCode(r.id),
    location: r.cityState,
    status: mapDbStatus(r.status),
    price: formatListingPriceBrl(r.priceBrl),
    imageSrc: r.coverImageUrl,
    imageAlt: r.title,
  }))

  return { rows: adminRows, stats, statusCounts, monthlyData: computeMonthlyData(dbRows) }
}
