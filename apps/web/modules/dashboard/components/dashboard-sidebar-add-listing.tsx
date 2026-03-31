"use client"

import Link from "next/link"

import { IconPlus } from "@tabler/icons-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

import { DASHBOARD_NEW_LISTING_PATH } from "@/modules/dashboard/constants/paths"

export function DashboardSidebarAddListing() {
  return (
    <SidebarGroup className="border-b border-sidebar-border pb-2">
      <SidebarGroupContent className="px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href={DASHBOARD_NEW_LISTING_PATH} />}
              className="h-10 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 hover:text-sidebar-primary-foreground"
            >
              <IconPlus className="size-4" stroke={2.5} aria-hidden />
              <span className="font-heading text-[10px] font-bold tracking-widest uppercase">
                Adicionar imóvel
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
