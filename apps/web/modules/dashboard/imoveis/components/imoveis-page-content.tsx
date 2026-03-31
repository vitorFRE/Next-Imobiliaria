import { LISTINGS_ADMIN_ROWS } from "../constants/listings-admin-mock"
import { ListingsManageFooter } from "./listings-manage-footer"
import { ListingsManageHero } from "./listings-manage-hero"
import { ListingsManageStats } from "./listings-manage-stats"
import { ListingsManageTable } from "./listings-manage-table"

/** Conteúdo da rota `/dashboard/imoveis`. */
export function ImoveisPageContent() {
  return (
    <div className="mx-auto flex max-w-7xl flex-1 flex-col pb-20">
      <ListingsManageHero />
      <ListingsManageStats />
      <ListingsManageTable rows={LISTINGS_ADMIN_ROWS} />
      <ListingsManageFooter />
    </div>
  )
}
