import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

export function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-8", className)} {...props} />
}

export function Field({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="field" className={cn("group relative", className)} {...props} />
}

export function FieldLabel({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "mb-2 block font-sans text-[11px] uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary",
        className,
      )}
      {...props}
    />
  )
}

export function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-xs text-muted-foreground", className)} {...props} />
}

function errorToString(e: unknown): string {
  if (typeof e === "string") return e
  if (e && typeof e === "object" && "message" in e) {
    const m = (e as { message?: unknown }).message
    if (typeof m === "string") return m
  }
  return String(e)
}

export function FieldError({
  errors,
  className,
  ...props
}: { errors: unknown[] } & React.ComponentProps<"p">) {
  if (!errors?.length) return null
  return (
    <p role="alert" className={cn("text-xs text-destructive", className)} {...props}>
      {errors.map((err, i) => (
        <span key={i}>
          {errorToString(err)}
          {i < errors.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  )
}
