import { mapEmbedSrcForProperty } from "@/modules/property-detail/data/property-detail-from-listing"
import { PropertyAbout } from "@/modules/property-detail/components/property-about"
import { PropertyGallery } from "@/modules/property-detail/components/property-gallery"
import { PropertyLocationSection } from "@/modules/property-detail/components/property-location-section"
import { PropertySpecs } from "@/modules/property-detail/components/property-specs"
import { PropertyStickyWhatsapp } from "@/modules/property-detail/components/property-sticky-whatsapp"
import type { PropertyDetail } from "@/modules/property-detail/types/property-detail"
import { SiteNav } from "@/modules/core/components/site-nav"
import { HomeContainer } from "@/modules/home/components/home-container"
import { HomeFooter } from "@/modules/home/components/home-footer"

type PropertyDetailPageProps = {
  property: PropertyDetail
}

export function PropertyDetailPage({ property }: PropertyDetailPageProps) {
  const mapSrc = mapEmbedSrcForProperty(property)

  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteNav />
      <main className="min-h-screen pt-32">
        <HomeContainer className="mb-20">
          <PropertyGallery slides={property.gallery} />
        </HomeContainer>
        <HomeContainer className="pb-24">
          <section className="grid grid-cols-1 gap-16 md:grid-cols-12 lg:gap-16">
            <div className="md:col-span-12 lg:col-span-7 lg:col-start-1">
              <PropertySpecs specs={property.specs} />
              <PropertyAbout
                descriptionTitle={property.descriptionTitle}
                description={property.description}
                features={property.features}
              />
            </div>
            <div className="md:col-span-12 lg:col-span-5">
              <PropertyStickyWhatsapp
                title={property.title}
                price={property.price}
              />
            </div>
          </section>
        </HomeContainer>
        <HomeContainer className="pb-24">
          <PropertyLocationSection
            embedSrc={mapSrc}
            cardTitle={property.map.cardTitle}
            cardDescription={property.map.cardDescription}
          />
        </HomeContainer>
      </main>
      <HomeFooter />
    </div>
  )
}
