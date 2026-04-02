import { db } from "@/db/client"
import { listing } from "@/db/schemas/listing-schema"
import { LISTINGS } from "@/modules/listings/constants/listings-data"

export async function getPropertyListingIds(): Promise<string[]> {
  const rows = await db.select({ id: listing.id }).from(listing)
  const dbIds = rows.map((r) => r.id)
  const mockIds = LISTINGS.map((l) => l.id)
  return [...new Set([...mockIds, ...dbIds])]
}
