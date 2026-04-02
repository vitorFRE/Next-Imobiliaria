import type { ReactNode } from "react"

import { DashboardLayoutClient } from "@/modules/dashboard/components/dashboard-layout-client"
import { requireAdmin } from "@/lib/auth-guard"

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  await requireAdmin()

  return <DashboardLayoutClient>{children}</DashboardLayoutClient>
}
