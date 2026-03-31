"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { IconUser } from "@tabler/icons-react"

import { buttonVariants } from "@workspace/ui/components/button"

import { HomeContainer } from "@/modules/home/components/home-container"
import { WHATSAPP_HREF } from "@/modules/core/constants/contact"
import {
  ADMIN_ENTRY_PATH,
  BRAND,
  NAV_LINKS,
} from "@/modules/core/constants/site"
import { cn } from "@workspace/ui/lib/utils"

export function SiteNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl transition-all duration-300">
      <HomeContainer className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl font-black tracking-tighter text-primary uppercase"
        >
          {BRAND}
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-heading text-sm font-bold tracking-tight transition-colors",
                  active
                    ? "border-b-2 border-primary pb-1 text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-auto px-6 py-3 font-heading text-xs font-extrabold tracking-widest uppercase active:scale-95 md:px-8"
            )}
          >
            Fale conosco
          </a>
          <Link
            href={ADMIN_ENTRY_PATH}
            aria-label="Área administrativa"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "inline-flex h-auto items-center justify-center px-6 py-3 active:scale-95"
            )}
          >
            <IconUser />
          </Link>
        </div>
      </HomeContainer>
    </nav>
  )
}
