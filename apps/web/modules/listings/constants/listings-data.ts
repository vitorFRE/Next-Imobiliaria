import type { PropertyListing } from "@/modules/listings/types/listing"

export const LISTING_PROPERTY_TYPES = [
  "Todos os tipos",
  "Coberturas",
  "Casas",
  "Apartamentos",
] as const

/** Bairros para o filtro da listagem (apenas seleção, sem busca livre). */
export const LISTING_BAIRROS = [
  "Todos os bairros",
  "Jardins",
  "Itaim Bibi",
  "Ipanema",
  "Alphaville",
  "Lago Sul",
  "Nova Lima",
  "Trancoso",
  "Lourdes",
] as const

export const LISTING_PRICE_OPTIONS = [
  "Sem limite",
  "Até R$ 5.000.000",
  "Até R$ 10.000.000",
  "R$ 15.000.000+",
] as const
