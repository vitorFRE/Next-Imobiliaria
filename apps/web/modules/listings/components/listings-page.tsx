import { HomeContainer } from "@/modules/home/components/home-container"
import { HomeFooter } from "@/modules/home/components/home-footer"
import { SiteNav } from "@/modules/core/components/site-nav"
import { ListingsCatalog } from "@/modules/listings/components/listings-catalog"
import type { CatalogListingsResult } from "@/modules/listings/services/get-catalog-listings"

type Props = {
  catalog: CatalogListingsResult
  bairroOptions: string[]
}

export function ListingsPage({ catalog, bairroOptions }: Props) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteNav />
      <main className="pt-32 pb-24">
        <HomeContainer>
          <ListingsCatalog catalog={catalog} bairroOptions={bairroOptions} />
        </HomeContainer>
      </main>
      <HomeFooter />
    </div>
  )
}
