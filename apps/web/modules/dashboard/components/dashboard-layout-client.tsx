"use client"

import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

import { AppSidebar } from "@/modules/dashboard/components/app-sidebar"
import { DashboardHeader } from "@/modules/dashboard/components/dashboard-header"
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"

export function DashboardLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader pathname={pathname} />
        <div className="flex flex-1 flex-col gap-4 px-4 pt-6 md:px-8 md:pt-8 lg:px-12">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
