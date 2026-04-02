import { getAdminListingsOverview } from "@/modules/dashboard/imoveis/services/get-admin-listings-overview"
import { OverviewFeaturedProperties } from "./overview-featured-properties"
import { OverviewHero } from "./overview-hero"
import { OverviewMetricsBento } from "./overview-metrics-bento"
import { OverviewMonthlyChart } from "./overview-monthly-chart"

/** Conteúdo da rota `/dashboard` (visão geral). */
export async function OverviewPageContent() {
  const { rows, stats, monthlyData } = await getAdminListingsOverview()

  const featuredListings = rows
    .filter((r) => r.status === "available")
    .slice(0, 3)

  return (
    <div className="flex flex-1 flex-col gap-4 pb-20">
      <OverviewHero />
      <OverviewMetricsBento stats={stats} />
      <OverviewMonthlyChart monthlyData={monthlyData} />
      <OverviewFeaturedProperties listings={featuredListings} />
    </div>
  )
}
