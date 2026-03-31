"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  DASHBOARD_HOME_PATH,
  DASHBOARD_MANAGE_LISTINGS_PATH,
} from "@/modules/dashboard/constants/paths"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { IconLayoutDashboard, IconBuilding } from "@tabler/icons-react"
import { cn } from "@workspace/ui/lib/utils"

const items = [
  {
    title: "Painel",
    href: DASHBOARD_HOME_PATH,
    icon: IconLayoutDashboard,
  },
  {
    title: "Gerenciar imóveis",
    href: DASHBOARD_MANAGE_LISTINGS_PATH,
    icon: IconBuilding,
  },
] as const

export function DashboardSidebarNav() {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="flex flex-col gap-2">
          {items.map((item) => {
            const active =
              item.href === DASHBOARD_HOME_PATH
                ? pathname === DASHBOARD_HOME_PATH
                : pathname.startsWith(item.href)
            const Icon = item.icon
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  render={<Link href={item.href} />}
                  isActive={active}
                  className={cn(
                    "h-12 text-sm",
                    active &&
                      "border-l-4 border-sidebar-primary bg-sidebar-accent text-sidebar-accent-foreground",
                  )}
                >
                  <Icon className="size-5" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
