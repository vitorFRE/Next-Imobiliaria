import { count, desc } from "drizzle-orm"

import { db } from "@/db/client"
import { listing } from "@/db/schemas/listing-schema"
import { CATALOG_PAGE_SIZE } from "@/modules/listings/constants/catalog"
import {
  catalogListingWhere,
  type CatalogFilters,
} from "@/modules/listings/services/catalog-listing-where"
import { mapListingRowToPropertyListing } from "@/modules/listings/services/map-listing-row-to-property-listing"
import type { PropertyListing } from "@/modules/listings/types/listing"

export type CatalogListingsResult = {
  items: PropertyListing[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  filters: CatalogFilters
}

export async function getCatalogListings(
  page: number,
  filters: CatalogFilters,
  pageSize: number = CATALOG_PAGE_SIZE
): Promise<CatalogListingsResult> {
  const where = catalogListingWhere(filters)

  const [countRow] = await db
    .select({ total: count() })
    .from(listing)
    .where(where)

  const total = countRow?.total ?? 0
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const offset = (safePage - 1) * pageSize

  const rows = await db
    .select({
      id: listing.id,
      title: listing.title,
      priceBrl: listing.priceBrl,
      cityState: listing.cityState,
      bedrooms: listing.bedrooms,
      totalAreaM2: listing.totalAreaM2,
      hasParking: listing.hasParking,
      coverImageUrl: listing.coverImageUrl,
      descriptionBody: listing.descriptionBody,
    })
    .from(listing)
    .where(where)
    .orderBy(desc(listing.createdAt))
    .limit(pageSize)
    .offset(offset)

  return {
    items: rows.map(mapListingRowToPropertyListing),
    total,
    page: safePage,
    pageSize,
    totalPages,
    filters,
  }
}
