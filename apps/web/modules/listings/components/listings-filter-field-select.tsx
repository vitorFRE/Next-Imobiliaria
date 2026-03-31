"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@workspace/ui/lib/utils"

const triggerClass = cn(
  "!h-auto min-h-8.5 w-full min-w-0 rounded-none border border-border/35 bg-muted/20 px-3 py-1.5 shadow-none ring-0",
  "text-sm font-medium text-foreground",
  "hover:bg-muted/30 focus-visible:border-border/60 focus-visible:ring-1 focus-visible:ring-ring/35",
  "[&_[data-slot=select-value]]:line-clamp-1 [&_[data-slot=select-value]]:min-w-0",
  "[&_[data-slot=select-value]]:flex-1 [&_[data-slot=select-value]]:text-left",
  "[&_[data-slot=select-value]]:font-medium [&_[data-slot=select-value]]:text-foreground",
  "justify-between gap-2 [&_svg:last-child]:shrink-0 [&_svg]:size-4 [&_svg]:text-muted-foreground",
)

type ListingsFilterFieldSelectProps = {
  options: readonly string[]
  value: string
  onValueChange: (value: string) => void
  ariaLabel: string
}

export function ListingsFilterFieldSelect({
  options,
  value,
  onValueChange,
  ariaLabel,
}: ListingsFilterFieldSelectProps) {
  return (
    <Select
      value={value}
      onValueChange={(v) => {
        if (v != null) onValueChange(v)
      }}
    >
      <SelectTrigger
        aria-label={ariaLabel}
        size="sm"
        className={triggerClass}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        align="start"
        sideOffset={6}
        className="max-h-72 min-w-(--anchor-width) max-w-[min(100vw-2rem,24rem)]"
      >
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
