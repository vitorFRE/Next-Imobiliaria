import { BRAND } from "@/modules/core/constants/site"
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

const MONOGRAM = BRAND.trim().slice(0, 1).toUpperCase()

export function DashboardSidebarBrand() {
  return (
    <SidebarHeader className="border-0 p-2 group-data-[collapsible=icon]:overflow-hidden">
      <SidebarMenu>
        <SidebarMenuItem className="min-w-0 overflow-hidden group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
          <div className="flex max-w-full min-w-0 flex-col gap-1 px-2 py-2 group-data-[collapsible=icon]:hidden">
            <span className="truncate font-heading text-lg font-bold tracking-tighter text-sidebar-foreground uppercase">
              {BRAND}
            </span>
          </div>
          <div
            className="hidden size-8 shrink-0 items-center justify-center bg-sidebar-accent font-heading text-sm font-black text-sidebar-accent-foreground group-data-[collapsible=icon]:flex"
            aria-hidden
            title={BRAND}
          >
            {MONOGRAM}
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}
