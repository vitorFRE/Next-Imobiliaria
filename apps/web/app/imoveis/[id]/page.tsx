import { notFound } from "next/navigation"

import { BRAND } from "@/modules/core/constants/site"
import { PropertyDetailPage } from "@/modules/property-detail/components/property-detail-page"
import {
  getPropertyById,
  getPropertyListingIds,
} from "@/modules/property-detail/services/get-property-by-id"

export const dynamicParams = true

export async function generateStaticParams() {
  const ids = await getPropertyListingIds()
  return ids.map((id) => ({ id }))
}

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const property = await getPropertyById(id)
  if (!property) {
    return { title: `Imóvel | ${BRAND}` }
  }
  return {
    title: `${property.title} | ${BRAND}`,
    description: `${property.title} — ${property.location}. ${property.price}.`,
  }
}

export default async function PropertyDetailRoute({ params }: PageProps) {
  const { id } = await params
  const property = await getPropertyById(id)
  if (!property) notFound()
  return <PropertyDetailPage property={property} />
}
