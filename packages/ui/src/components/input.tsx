import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full border-0 border-b border-border bg-transparent px-0 py-3 font-light text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus-visible:ring-0",
        className,
      )}
      {...props}
    />
  )
}
