import type { ReactNode } from "react"

import { cn } from "@workspace/ui/lib/utils"

type HomeContainerProps = {
  children: ReactNode
  className?: string
}

export function HomeContainer({ children, className }: HomeContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-6 md:px-16", className)}
    >
      {children}
    </div>
  )
}
