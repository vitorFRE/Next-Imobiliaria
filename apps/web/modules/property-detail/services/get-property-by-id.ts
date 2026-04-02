import { LISTINGS } from "@/modules/listings/constants/listings-data"
import { PROPERTY_DETAIL_MANSION } from "@/modules/property-detail/data/property-detail-mock-mansion"
import {
  propertyDetailFromListing,
} from "@/modules/property-detail/data/property-detail-from-listing"
import { getPropertyDetailFromDb } from "@/modules/property-detail/services/get-property-detail-from-db"
import type { PropertyDetail } from "@/modules/property-detail/types/property-detail"

export async function getPropertyById(id: string): Promise<PropertyDetail | null> {
  const fromDb = await getPropertyDetailFromDb(id)
  if (fromDb) return fromDb

  if (PROPERTY_DETAIL_MANSION.id === id) {
    return PROPERTY_DETAIL_MANSION
  }

  const listing = LISTINGS.find((l) => l.id === id)
  if (!listing) return null

  return propertyDetailFromListing(listing)
}
