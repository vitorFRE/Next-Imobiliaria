import { PropertyFeatureGlyph } from "@/modules/property-detail/components/property-feature-icon"
import type { PropertyDetail } from "@/modules/property-detail/types/property-detail"

type PropertyAboutProps = Pick<
  PropertyDetail,
  "descriptionTitle" | "description" | "features"
>

export function PropertyAbout({
  descriptionTitle,
  description,
  features,
}: PropertyAboutProps) {
  return (
    <>
      <div className="space-y-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary">
          {descriptionTitle}
        </h2>
        {description.map((p, i) => (
          <p
            key={i}
            className="font-sans text-lg leading-relaxed text-muted-foreground"
          >
            {p}
          </p>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-1 gap-y-6 sm:grid-cols-2">
        {features.map((f) => (
          <div key={f.label} className="flex items-center gap-4">
            <PropertyFeatureGlyph kind={f.icon} />
            <span className="font-sans text-sm font-medium tracking-tight uppercase">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
