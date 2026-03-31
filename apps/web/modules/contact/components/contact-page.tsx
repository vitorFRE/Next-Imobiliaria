import { ContactChannels } from "@/modules/contact/components/contact-channels"
import { ContactClosingCta } from "@/modules/contact/components/contact-closing-cta"
import { ContactHero } from "@/modules/contact/components/contact-hero"
import { ContactMap } from "@/modules/contact/components/contact-map"
import { ContactOffices } from "@/modules/contact/components/contact-offices"
import { getMapEmbedSrc } from "@/modules/contact/constants/contact-page"
import { SiteNav } from "@/modules/core/components/site-nav"
import { HomeFooter } from "@/modules/home/components/home-footer"

export function ContactPage() {
  const mapSrc = getMapEmbedSrc()

  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteNav />
      <main className="pt-32">
        <ContactHero />
        <section className="px-6 pb-32 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12">
            <div className="flex flex-col space-y-20 md:col-span-5">
              <ContactChannels />
              <ContactOffices />
            </div>
            <div className="md:col-span-7">
              <ContactMap embedSrc={mapSrc} />
            </div>
          </div>
        </section>
        <ContactClosingCta />
      </main>
      <HomeFooter />
    </div>
  )
}
