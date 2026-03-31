import { OverviewFeaturedProperties } from "./overview-featured-properties"
import { OverviewHero } from "./overview-hero"
import { OverviewMetricsBento } from "./overview-metrics-bento"
import { OverviewRecentActivities } from "./overview-recent-activities"
import { OverviewWeeklyVisits } from "./overview-weekly-visits"

/** Conteúdo da rota `/dashboard` (visão geral). */
export function OverviewPageContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 pb-20">
      <OverviewHero />
      <OverviewMetricsBento />
      <div className="grid grid-cols-12 gap-12">
        <OverviewWeeklyVisits />
        <OverviewRecentActivities />
      </div>
      <OverviewFeaturedProperties />
    </div>
  )
}
