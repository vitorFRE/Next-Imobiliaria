import {
  LISTING_BAIRROS,
  LISTING_PRICE_OPTIONS,
  LISTING_PROPERTY_TYPES,
} from "@/modules/listings/constants/listings-data"
import type { CatalogFilters } from "@/modules/listings/services/catalog-listing-where"

function first(v: string | string[] | undefined): string | undefined {
  if (Array.isArray(v)) return v[0]
  return v
}

export function parseCatalogSearchParams(
  sp: Record<string, string | string[] | undefined>
): { page: number; filters: CatalogFilters } {
  const pageRaw = parseInt(first(sp.page) ?? "1", 10)
  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1

  const bRaw = first(sp.bairro)
  const bairro =
    !bRaw || bRaw === LISTING_BAIRROS[0] ? LISTING_BAIRROS[0] : bRaw
  const t = first(sp.tipo) ?? LISTING_PROPERTY_TYPES[0]
  const p = first(sp.priceMax) ?? LISTING_PRICE_OPTIONS[0]

  const filters: CatalogFilters = {
    bairro,
    tipo: LISTING_PROPERTY_TYPES.includes(
      t as (typeof LISTING_PROPERTY_TYPES)[number]
    )
      ? t
      : LISTING_PROPERTY_TYPES[0],
    priceMax: LISTING_PRICE_OPTIONS.includes(
      p as (typeof LISTING_PRICE_OPTIONS)[number]
    )
      ? p
      : LISTING_PRICE_OPTIONS[0],
  }

  return { page, filters }
}

export function buildCatalogQueryString(
  page: number,
  filters: CatalogFilters
): string {
  const q = new URLSearchParams()
  if (page > 1) q.set("page", String(page))
  if (filters.bairro !== LISTING_BAIRROS[0]) q.set("bairro", filters.bairro)
  if (filters.tipo !== LISTING_PROPERTY_TYPES[0]) q.set("tipo", filters.tipo)
  if (filters.priceMax !== LISTING_PRICE_OPTIONS[0])
    q.set("priceMax", filters.priceMax)
  return q.toString()
}
