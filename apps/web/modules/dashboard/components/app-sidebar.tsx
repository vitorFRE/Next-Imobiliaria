"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@workspace/ui/components/sidebar"

import { DashboardSidebarAddListing } from "@/modules/dashboard/components/dashboard-sidebar-add-listing"
import { DashboardSidebarBrand } from "@/modules/dashboard/components/dashboard-sidebar-brand"
import { DashboardSidebarNav } from "@/modules/dashboard/components/dashboard-sidebar-nav"
import { NavUser } from "@/modules/dashboard/components/nav-user"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <DashboardSidebarBrand />
      <SidebarContent>
        <DashboardSidebarNav />
      </SidebarContent>
      <SidebarFooter>
        <DashboardSidebarAddListing />
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
