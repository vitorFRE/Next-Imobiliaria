import {
  LISTING_BAIRROS,
  LISTING_PRICE_OPTIONS,
  LISTING_PROPERTY_TYPES,
} from "@/modules/listings/constants/listings-data"
import type { PropertyListing } from "@/modules/listings/types/listing"

export type ListingsFilterValues = {
  bairro: string
  tipo: string
  priceMax: string
}

function matchesBairro(listing: PropertyListing, bairro: string): boolean {
  if (bairro === LISTING_BAIRROS[0]) return true
  const beforeComma = listing.location.split(",")[0]?.trim() ?? listing.location
  return beforeComma.toLowerCase().includes(bairro.toLowerCase())
}

function matchesTipo(listing: PropertyListing, tipo: string): boolean {
  if (tipo === LISTING_PROPERTY_TYPES[0]) return true
  const t = `${listing.title} ${listing.imageAlt}`.toLowerCase()
  if (tipo === "Coberturas") return t.includes("cobertura")
  if (tipo === "Casas")
    return (
      t.includes("casa") ||
      t.includes("villa") ||
      t.includes("mansão") ||
      t.includes("mansao")
    )
  if (tipo === "Apartamentos")
    return t.includes("duplex") || t.includes("apartamento") || t.includes("penthouse")
  return true
}

function parseListingPriceMil(value: string): number | null {
  const lower = value.toLowerCase()
  if (lower.includes("consulta")) return null
  const digits = value.replace(/\D/g, "")
  if (!digits) return null
  return Number.parseInt(digits, 10)
}

function matchesPriceMax(listing: PropertyListing, priceMax: string): boolean {
  if (priceMax === LISTING_PRICE_OPTIONS[0]) return true
  const price = parseListingPriceMil(listing.price)
  if (price == null) return true

  if (priceMax === "Até R$ 5.000.000") return price <= 5_000_000
  if (priceMax === "Até R$ 10.000.000") return price <= 10_000_000
  if (priceMax === "R$ 15.000.000+") return price >= 15_000_000
  return true
}

export function filterListings(
  listings: PropertyListing[],
  filters: ListingsFilterValues,
): PropertyListing[] {
  return listings.filter(
    (l) =>
      matchesBairro(l, filters.bairro) &&
      matchesTipo(l, filters.tipo) &&
      matchesPriceMax(l, filters.priceMax),
  )
}
