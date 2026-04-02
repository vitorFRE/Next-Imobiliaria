import { asc, eq } from "drizzle-orm"

import { db } from "@/db/client"
import { listing, listingMedia } from "@/db/schemas/listing-schema"
import { formatListingPriceBrl } from "@/modules/listings/utils/format-listing-price"
import type { PropertyDetail } from "@/modules/property-detail/types/property-detail"

export async function getPropertyDetailFromDb(
  id: string
): Promise<PropertyDetail | null> {
  const [row] = await db
    .select()
    .from(listing)
    .where(eq(listing.id, id))
    .limit(1)

  if (!row) return null

  const media = await db
    .select()
    .from(listingMedia)
    .where(eq(listingMedia.listingId, id))
    .orderBy(asc(listingMedia.sortOrder))

  const gallery = [
    {
      image: row.coverImageUrl,
      imageAlt: row.title,
      label: row.cityState,
      heading: row.title,
    },
    ...media.map((m) => ({
      image: m.imageUrl,
      imageAlt: row.title,
      label: row.cityState,
      heading: row.title,
    })),
  ]

  const specs = [
    { label: "Área total", value: `${Math.round(row.totalAreaM2)} m²` },
    { label: "Área construída", value: `${Math.round(row.builtAreaM2)} m²` },
    { label: "Dormitórios", value: String(row.bedrooms) },
    { label: "Banheiros", value: String(row.bathrooms) },
    { label: "Vagas", value: row.hasParking ? "Sim" : "Não" },
  ]

  const paragraphs = row.descriptionBody
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  const features = [
    { icon: "grid" as const, label: `${Math.round(row.totalAreaM2)} m² total` },
    { icon: "bed" as const, label: `${row.bedrooms} dormitórios` },
    ...(row.hasParking ? [{ icon: "car" as const, label: "Vaga" }] : []),
  ]

  return {
    id: row.id,
    title: row.title,
    location: row.cityState,
    price: formatListingPriceBrl(row.priceBrl),
    gallery,
    specs,
    descriptionTitle: row.title,
    description: paragraphs.length ? paragraphs : ["Sem descrição cadastrada."],
    features,
    map: {
      embedQuery: row.cityState,
      cardTitle: "Localização",
      cardDescription:
        "Agende uma visita para conhecer o entorno e a posição deste imóvel.",
    },
  }
}
