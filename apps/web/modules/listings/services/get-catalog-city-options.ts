import { eq } from "drizzle-orm"

import { db } from "@/db/client"
import { listing } from "@/db/schemas/listing-schema"
import { LISTING_BAIRROS } from "@/modules/listings/constants/listings-data"

export async function getCatalogCityOptions(): Promise<string[]> {
  const rows = await db
    .selectDistinct({ cityState: listing.cityState })
    .from(listing)
    .where(eq(listing.status, "disponivel"))

  const fromDb = rows
    .map((r) => r.cityState)
    .filter((c): c is string => Boolean(c?.trim()))
    .sort((a, b) => a.localeCompare(b, "pt-BR"))

  return [LISTING_BAIRROS[0], ...fromDb]
}
