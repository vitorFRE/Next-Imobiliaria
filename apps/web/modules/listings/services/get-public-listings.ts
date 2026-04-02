import { desc, eq } from "drizzle-orm"

import { db } from "@/db/client"
import { listing } from "@/db/schemas/listing-schema"

import { formatListingPriceBrl } from "@/modules/listings/utils/format-listing-price"

export type PublicListingCard = {
  id: string
  image: string
  location: string
  title: string
  area: string
  beds: string
  price: string
}

export async function getPublicListings(
  limit: number
): Promise<PublicListingCard[]> {
  const rows = await db
    .select({
      id: listing.id,
      title: listing.title,
      priceBrl: listing.priceBrl,
      cityState: listing.cityState,
      bedrooms: listing.bedrooms,
      totalAreaM2: listing.totalAreaM2,
      coverImageUrl: listing.coverImageUrl,
    })
    .from(listing)
    .where(eq(listing.status, "disponivel"))
    .orderBy(desc(listing.createdAt))
    .limit(limit)

  return rows.map((row) => ({
    id: row.id,
    image: row.coverImageUrl,
    location: row.cityState,
    title: row.title,
    area: `${Math.round(row.totalAreaM2)} m²`,
    beds: `${row.bedrooms} dorms.`,
    price: formatListingPriceBrl(row.priceBrl),
  }))
}
