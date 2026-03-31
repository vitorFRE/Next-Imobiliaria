import type { ReactNode } from "react"

import { IconLock } from "@tabler/icons-react"

import { BRAND } from "@/modules/core/constants/site"

type AuthPageShellProps = {
  title: string
  subtitle: string
  children: ReactNode
}

export function AuthPageShell({
  title,
  subtitle,
  children,
}: AuthPageShellProps) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-luxury-deep text-foreground selection:bg-primary selection:text-primary-foreground">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(19,19,19,0.95), rgba(19,19,19,0.95)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <main className="relative z-10 w-full max-w-md px-8 py-12 md:px-12">
        <div className="mb-16 text-center">
          <p className="font-heading text-4xl font-black tracking-tighter text-primary uppercase">
            {BRAND}
          </p>
          <p className="mt-2 font-sans text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            {subtitle}
          </p>
          <h1 className="sr-only">{title}</h1>
        </div>
        {children}
      </main>
      <div className="fixed top-10 right-10 z-10 hidden items-center gap-4 lg:flex">
        <IconLock className="size-5 text-muted-foreground" aria-hidden />
        <span className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          Acesso restrito
        </span>
      </div>
    </div>
  )
}
