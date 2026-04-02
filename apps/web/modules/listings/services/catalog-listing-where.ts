import { and, eq, gte, like, lte, or } from "drizzle-orm"
import type { SQL } from "drizzle-orm"

import { listing } from "@/db/schemas/listing-schema"
import {
  LISTING_BAIRROS,
  LISTING_PRICE_OPTIONS,
  LISTING_PROPERTY_TYPES,
} from "@/modules/listings/constants/listings-data"

export type CatalogFilters = {
  bairro: string
  tipo: string
  priceMax: string
}

function tipoSql(tipo: string): SQL | undefined {
  if (tipo === LISTING_PROPERTY_TYPES[0]) return undefined
  const t = listing.title
  const d = listing.descriptionBody
  if (tipo === "Coberturas") {
    return or(like(t, "%cobertura%"), like(d, "%cobertura%"))
  }
  if (tipo === "Casas") {
    return or(
      like(t, "%casa%"),
      like(t, "%villa%"),
      like(t, "%mansão%"),
      like(t, "%mansao%"),
      like(d, "%casa%")
    )
  }
  if (tipo === "Apartamentos") {
    return or(
      like(t, "%duplex%"),
      like(t, "%apartamento%"),
      like(t, "%penthouse%"),
      like(d, "%apartamento%")
    )
  }
  return undefined
}

function priceSql(priceMax: string): SQL | undefined {
  if (priceMax === LISTING_PRICE_OPTIONS[0]) return undefined
  if (priceMax === "Até R$ 5.000.000") return lte(listing.priceBrl, 5_000_000)
  if (priceMax === "Até R$ 10.000.000") return lte(listing.priceBrl, 10_000_000)
  if (priceMax === "R$ 15.000.000+") return gte(listing.priceBrl, 15_000_000)
  return undefined
}

export function catalogListingWhere(filters: CatalogFilters): SQL {
  const parts: SQL[] = [eq(listing.status, "disponivel")]

  if (filters.bairro && filters.bairro !== LISTING_BAIRROS[0]) {
    parts.push(like(listing.cityState, `%${filters.bairro}%`))
  }

  const p = priceSql(filters.priceMax)
  if (p) parts.push(p)

  const t = tipoSql(filters.tipo)
  if (t) parts.push(t)

  if (parts.length === 1) return parts[0]!
  const combined = and(...parts)
  if (!combined) throw new Error("catalogListingWhere: empty and()")
  return combined
}
