import Link from "next/link"

import { BRAND } from "@/modules/core/constants/site"
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

const MONOGRAM = BRAND.trim().slice(0, 1).toUpperCase()

export function DashboardSidebarBrand() {
  return (
    <SidebarHeader className="border-0 p-2 group-data-[collapsible=icon]:overflow-hidden">
      <SidebarMenu>
        <SidebarMenuItem className="min-w-0 overflow-hidden group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
          <SidebarMenuButton
            render={
              <Link
                href="/"
                prefetch={false}
                aria-label={`${BRAND} — ir para a página inicial`}
              />
            }
            className="h-auto min-h-0 w-full flex-col items-stretch gap-1 p-2 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:max-w-8! group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0"
          >
            <div className="flex max-w-full min-w-0 flex-col gap-1 px-0 py-0 group-data-[collapsible=icon]:hidden">
              <span className="truncate font-heading text-lg font-bold tracking-tighter text-sidebar-foreground uppercase">
                {BRAND}
              </span>
            </div>
            <div
              className="hidden size-full min-h-0 min-w-0 shrink-0 items-center justify-center bg-sidebar-accent font-heading text-sm font-black text-sidebar-accent-foreground group-data-[collapsible=icon]:flex"
              aria-hidden
              title={BRAND}
            >
              {MONOGRAM}
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}
