"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"

import { LISTING_BAIRROS } from "@/modules/listings/constants/listings-data"
import { ListingPropertyCard } from "@/modules/listings/components/listing-property-card"
import { ListingsFilterBar } from "@/modules/listings/components/listings-filter-bar"
import { ListingsPagination } from "@/modules/listings/components/listings-pagination"
import type { CatalogListingsResult } from "@/modules/listings/services/get-catalog-listings"
import { buildCatalogQueryString } from "@/modules/listings/utils/catalog-search-params"

type Props = {
  catalog: CatalogListingsResult
  bairroOptions: string[]
}

export function ListingsCatalog({ catalog, bairroOptions }: Props) {
  const router = useRouter()

  const effectiveBairroOptions = useMemo(() => {
    const b = catalog.filters.bairro
    if (b === LISTING_BAIRROS[0]) return bairroOptions
    if (bairroOptions.includes(b)) return bairroOptions
    return [b, ...bairroOptions]
  }, [bairroOptions, catalog.filters.bairro])

  function pushFilters(next: Partial<typeof catalog.filters>) {
    const merged = { ...catalog.filters, ...next }
    const q = buildCatalogQueryString(1, merged)
    router.push(q ? `/imoveis?${q}` : "/imoveis")
  }

  function clearFilters() {
    router.push("/imoveis")
  }

  return (
    <>
      <section className="mb-16">
        <h1 className="mb-12 font-heading text-5xl font-extrabold tracking-tighter uppercase leading-none md:text-7xl">
          Catálogo de{" "}
          <span className="block text-muted-foreground">imóveis</span>
        </h1>
        <ListingsFilterBar
          bairroOptions={effectiveBairroOptions}
          bairro={catalog.filters.bairro}
          tipo={catalog.filters.tipo}
          priceMax={catalog.filters.priceMax}
          onBairroChange={(v) => pushFilters({ bairro: v })}
          onTipoChange={(v) => pushFilters({ tipo: v })}
          onPriceMaxChange={(v) => pushFilters({ priceMax: v })}
          onClearFilters={clearFilters}
        />
      </section>
      {catalog.items.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {catalog.items.map((item, index) => (
            <ListingPropertyCard
              key={item.id}
              listing={{
                ...item,
                staggerMd: index % 2 === 1,
              }}
            />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center font-sans text-muted-foreground">
          Nenhum imóvel encontrado com os filtros selecionados.
        </p>
      )}
      {catalog.total > 0 ? (
        <ListingsPagination
          page={catalog.page}
          totalPages={catalog.totalPages}
          filters={catalog.filters}
        />
      ) : null}
    </>
  )
}
