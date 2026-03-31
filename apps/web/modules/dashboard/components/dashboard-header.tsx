"use client"

import Link from "next/link"

import {
  DASHBOARD_HOME_PATH,
  DASHBOARD_MANAGE_LISTINGS_PATH,
  DASHBOARD_NEW_LISTING_PATH,
} from "@/modules/dashboard/constants/paths"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Separator } from "@workspace/ui/components/separator"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"

type DashboardHeaderProps = {
  pathname: string
}

export function DashboardHeader({ pathname }: DashboardHeaderProps) {
  const isUnderListings =
    pathname === DASHBOARD_MANAGE_LISTINGS_PATH ||
    pathname.startsWith(`${DASHBOARD_MANAGE_LISTINGS_PATH}/`)
  const isNewListing = pathname.startsWith(DASHBOARD_NEW_LISTING_PATH)

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href={DASHBOARD_HOME_PATH} />}>
                Painel
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {isUnderListings ? (
                isNewListing ? (
                  <BreadcrumbLink
                    render={<Link href={DASHBOARD_MANAGE_LISTINGS_PATH} />}
                  >
                    Gerenciar imóveis
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>Gerenciar imóveis</BreadcrumbPage>
                )
              ) : (
                <BreadcrumbPage>Visão geral</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {isNewListing ? (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Novo imóvel</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            ) : null}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  )
}
