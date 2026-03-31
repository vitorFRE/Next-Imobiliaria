"use client"

import { useMemo, useState } from "react"

import {
  LISTINGS,
  LISTING_BAIRROS,
  LISTING_PRICE_OPTIONS,
  LISTING_PROPERTY_TYPES,
} from "@/modules/listings/constants/listings-data"
import { ListingPropertyCard } from "@/modules/listings/components/listing-property-card"
import { ListingsFilterBar } from "@/modules/listings/components/listings-filter-bar"
import { ListingsPagination } from "@/modules/listings/components/listings-pagination"
import { filterListings } from "@/modules/listings/utils/filter-listings"

const defaultFilters = {
  bairro: LISTING_BAIRROS[0],
  tipo: LISTING_PROPERTY_TYPES[0],
  priceMax: LISTING_PRICE_OPTIONS[0],
} as const

export function ListingsCatalog() {
  const [bairro, setBairro] = useState<string>(defaultFilters.bairro)
  const [tipo, setTipo] = useState<string>(defaultFilters.tipo)
  const [priceMax, setPriceMax] = useState<string>(defaultFilters.priceMax)

  const filtered = useMemo(
    () => filterListings(LISTINGS, { bairro, tipo, priceMax }),
    [bairro, tipo, priceMax],
  )

  const clearFilters = () => {
    setBairro(defaultFilters.bairro)
    setTipo(defaultFilters.tipo)
    setPriceMax(defaultFilters.priceMax)
  }

  return (
    <>
      <section className="mb-16">
        <h1 className="mb-12 font-heading text-5xl font-extrabold tracking-tighter uppercase leading-none md:text-7xl">
          Catálogo de{" "}
          <span className="block text-muted-foreground">imóveis</span>
        </h1>
        <ListingsFilterBar
          bairro={bairro}
          tipo={tipo}
          priceMax={priceMax}
          onBairroChange={setBairro}
          onTipoChange={setTipo}
          onPriceMaxChange={setPriceMax}
          onClearFilters={clearFilters}
        />
      </section>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((listing) => (
            <ListingPropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center font-sans text-muted-foreground">
          Nenhum imóvel encontrado com os filtros selecionados.
        </p>
      )}
      {filtered.length > 0 ? <ListingsPagination /> : null}
    </>
  )
}
