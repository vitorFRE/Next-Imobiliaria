import { eq } from "drizzle-orm"

import { db } from "@/db/client"
import { listing } from "@/db/schemas/listing-schema"

export type ListingForEdit = {
  id: string
  title: string
  priceBrl: number
  cityState: string
  status: "disponivel" | "oculto" | "vendido"
  bedrooms: number
  bathrooms: number
  totalAreaM2: number
  builtAreaM2: number
  totalPieces: number
  hasParking: boolean
  descriptionBody: string
}

export async function getListingForEdit(id: string): Promise<ListingForEdit | null> {
  const rows = await db
    .select({
      id: listing.id,
      title: listing.title,
      priceBrl: listing.priceBrl,
      cityState: listing.cityState,
      status: listing.status,
      bedrooms: listing.bedrooms,
      bathrooms: listing.bathrooms,
      totalAreaM2: listing.totalAreaM2,
      builtAreaM2: listing.builtAreaM2,
      totalPieces: listing.totalPieces,
      hasParking: listing.hasParking,
      descriptionBody: listing.descriptionBody,
    })
    .from(listing)
    .where(eq(listing.id, id))
    .limit(1)

  return rows[0] ?? null
}
