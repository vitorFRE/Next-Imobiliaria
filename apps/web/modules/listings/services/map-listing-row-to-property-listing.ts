import type { PropertyListing } from "@/modules/listings/types/listing"
import { formatListingPriceBrl } from "@/modules/listings/utils/format-listing-price"

type ListingRow = {
  id: string
  title: string
  priceBrl: number
  cityState: string
  bedrooms: number
  totalAreaM2: number
  hasParking: boolean
  coverImageUrl: string
  descriptionBody: string
}

export function mapListingRowToPropertyListing(row: ListingRow): PropertyListing {
  const attrs: PropertyListing["attributes"] = [
    { icon: "area", label: `${Math.round(row.totalAreaM2)} m²` },
    { icon: "bed", label: `${row.bedrooms} DORMS.` },
  ]
  if (row.hasParking) attrs.push({ icon: "car", label: "VAGA" })

  const alt =
    row.descriptionBody.trim().slice(0, 120) ||
    `Foto do imóvel: ${row.title}`

  return {
    id: row.id,
    image: row.coverImageUrl,
    imageAlt: alt,
    title: row.title,
    price: formatListingPriceBrl(row.priceBrl),
    location: row.cityState,
    badge: "Venda",
    attributes: attrs,
  }
}
