import { ListingsPage } from "@/modules/listings/components/listings-page"
import { getCatalogCityOptions } from "@/modules/listings/services/get-catalog-city-options"
import { getCatalogListings } from "@/modules/listings/services/get-catalog-listings"
import { parseCatalogSearchParams } from "@/modules/listings/utils/catalog-search-params"

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function ImoveisPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const { page, filters } = parseCatalogSearchParams(sp)
  const [catalog, bairroOptions] = await Promise.all([
    getCatalogListings(page, filters),
    getCatalogCityOptions(),
  ])
  return <ListingsPage catalog={catalog} bairroOptions={bairroOptions} />
}
