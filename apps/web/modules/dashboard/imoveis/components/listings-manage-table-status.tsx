import { LISTING_STATUS_DOT_CLASSES } from "@/modules/dashboard/imoveis/constants/listing-status-dot-classes"
import type { ListingAdminStatus } from "@/modules/dashboard/imoveis/types/listings-admin"

const ADMIN_TO_DB: Record<ListingAdminStatus, keyof typeof LISTING_STATUS_DOT_CLASSES> = {
  available: "disponivel",
  hidden: "oculto",
  sold: "vendido",
}

function statusLabel(status: ListingAdminStatus): string {
  if (status === "available") return "Disponível"
  if (status === "hidden") return "Oculto"
  return "Vendido"
}

export function ListingsManageStatusCell({
  status,
}: {
  status: ListingAdminStatus
}) {
  const dot = LISTING_STATUS_DOT_CLASSES[ADMIN_TO_DB[status]]
  const text =
    status === "available" ? "text-foreground" : "text-muted-foreground"
  return (
    <div className="flex items-center gap-2">
      <span className={`size-2 shrink-0 rounded-[2px] ${dot}`} aria-hidden />
      <span
        className={`font-sans text-[10px] font-bold tracking-widest uppercase ${text}`}
      >
        {statusLabel(status)}
      </span>
    </div>
  )
}
