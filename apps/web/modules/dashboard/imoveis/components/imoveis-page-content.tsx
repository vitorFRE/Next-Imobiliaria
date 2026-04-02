import { getAdminListingsOverview } from "@/modules/dashboard/imoveis/services/get-admin-listings-overview"
import { ListingsManageFooter } from "./listings-manage-footer"
import { ListingsManageHero } from "./listings-manage-hero"
import { ListingsManageStats } from "./listings-manage-stats"
import { ListingsManageTable } from "./listings-manage-table"

/** Conteúdo da rota `/dashboard/imoveis`. */
export async function ImoveisPageContent() {
  const { rows, stats } = await getAdminListingsOverview()

  return (
    <div className="mx-auto flex max-w-7xl flex-1 flex-col pb-20">
      <ListingsManageHero />
      <ListingsManageStats stats={stats} />
      <ListingsManageTable rows={rows} />
      <ListingsManageFooter total={rows.length} />
    </div>
  )
}
