import { HomeContainer } from "@/modules/home/components/home-container"
import { HomeFooter } from "@/modules/home/components/home-footer"
import { SiteNav } from "@/modules/core/components/site-nav"
import { ListingsCatalog } from "@/modules/listings/components/listings-catalog"

export function ListingsPage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteNav />
      <main className="pt-32 pb-24">
        <HomeContainer>
          <ListingsCatalog />
        </HomeContainer>
      </main>
      <HomeFooter />
    </div>
  )
}
