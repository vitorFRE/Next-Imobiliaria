import { LISTINGS } from "@/modules/listings/constants/listings-data"
import { PROPERTY_DETAIL_MANSION } from "@/modules/property-detail/data/property-detail-mock-mansion"
import {
  propertyDetailFromListing,
} from "@/modules/property-detail/data/property-detail-from-listing"
import type { PropertyDetail } from "@/modules/property-detail/types/property-detail"

/**
 * Busca detalhe do imóvel por id.
 * Hoje: mock + fallback a partir da listagem. Substituir por `fetch` quando a API existir.
 */
export async function getPropertyById(id: string): Promise<PropertyDetail | null> {
  if (PROPERTY_DETAIL_MANSION.id === id) {
    return PROPERTY_DETAIL_MANSION
  }

  const listing = LISTINGS.find((l) => l.id === id)
  if (!listing) return null

  return propertyDetailFromListing(listing)
}

export async function getPropertyListingIds(): Promise<string[]> {
  return LISTINGS.map((l) => l.id)
}
