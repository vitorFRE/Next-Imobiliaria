import { HomeFeaturedProperties } from "@/modules/home/components/home-featured-properties"
import { HomeFooter } from "@/modules/home/components/home-footer"
import { HomeHero } from "@/modules/home/components/home-hero"
import { HomeNav } from "@/modules/home/components/home-nav"
import { HomeTestimonials } from "@/modules/home/components/home-testimonials"

export function HomePage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <HomeNav />
      <main>
        <HomeHero />
        <HomeFeaturedProperties />
        <HomeTestimonials />
      </main>
      <HomeFooter />
    </div>
  )
}
