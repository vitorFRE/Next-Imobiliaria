import { CONTACT_OFFICES } from "@/modules/contact/constants/contact-page"
import { cn } from "@workspace/ui/lib/utils"

export function ContactOffices() {
  return (
    <div className="space-y-8">
      {CONTACT_OFFICES.map((office) => (
        <div
          key={office.title}
          className={cn(
            "p-10",
            office.variant === "panel" &&
              "border border-border/60 bg-muted",
            office.variant === "outline" &&
              "border border-border bg-card text-card-foreground shadow-sm",
          )}
        >
          <h3 className="mb-4 font-heading text-xl font-bold text-primary">
            {office.title}
          </h3>
          {office.lines.map((line, i) => (
            <p
              key={line}
              className={cn(
                "font-sans text-muted-foreground",
                i === office.lines.length - 1 ? "mb-6" : "mb-2",
              )}
            >
              {line}
            </p>
          ))}
          <span className="font-sans text-[11px] tracking-widest text-muted-foreground uppercase">
            {office.note}
          </span>
        </div>
      ))}
    </div>
  )
}
