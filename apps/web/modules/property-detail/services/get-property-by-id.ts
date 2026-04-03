import { getPropertyDetailFromDb } from "@/modules/property-detail/services/get-property-detail-from-db"
import type { PropertyDetail } from "@/modules/property-detail/types/property-detail"

export async function getPropertyById(id: string): Promise<PropertyDetail | null> {
  return getPropertyDetailFromDb(id)
}