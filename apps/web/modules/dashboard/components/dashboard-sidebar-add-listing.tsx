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
    <SidebarGroup className="border-b border-sidebar-border pb-2 group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:pb-2!">
      <SidebarGroupContent className="px-2 group-data-[collapsible=icon]:px-0">
        <SidebarMenu>
          <SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
            <SidebarMenuButton
              tooltip="Adicionar imóvel"
              render={
                <Link
                  href={DASHBOARD_NEW_LISTING_PATH}
                  aria-label="Adicionar imóvel"
                />
              }
              className="h-10 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 hover:text-sidebar-primary-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:max-w-8! group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center"
            >
              <IconPlus className="size-4" stroke={2.5} aria-hidden />
              <span className="font-heading text-[10px] font-bold tracking-widest uppercase group-data-[collapsible=icon]:hidden">
                Adicionar imóvel
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
