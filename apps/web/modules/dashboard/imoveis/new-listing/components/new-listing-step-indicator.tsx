import { cn } from "@workspace/ui/lib/utils"

export function NewListingStepIndicator({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="flex gap-2" role="status" aria-label={`Etapa ${step} de 3`}>
      {([1, 2, 3] as const).map((i) => (
        <div
          key={i}
          className={cn(
            "h-1 w-12 transition-colors",
            step >= i ? "bg-primary" : "bg-muted-foreground/25",
          )}
        />
      ))}
    </div>
  )
}
