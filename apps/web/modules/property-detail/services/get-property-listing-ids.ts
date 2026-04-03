import { db } from "@/db/client"
import { listing } from "@/db/schemas/listing-schema"

export async function getPropertyListingIds(): Promise<string[]> {
  const rows = await db.select({ id: listing.id }).from(listing)
  return rows.map((r) => r.id)
}