import { IconArrowUpRight } from "@tabler/icons-react"

import { CONTACT_DIRECT_CHANNELS } from "@/modules/contact/constants/contact-page"

export function ContactChannels() {
  return (
    <div>
      <h2 className="mb-8 font-heading text-3xl font-bold text-primary">
        Canais Diretos
      </h2>
      <div className="space-y-0">
        {CONTACT_DIRECT_CHANNELS.map((ch) => {
          const isExternal = ch.href.startsWith("http")
          return (
            <a
              key={ch.label}
              href={ch.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer noopener" : undefined}
              className="group flex items-center justify-between border-b border-primary/10 py-4 transition-colors hover:border-primary"
            >
              <span className="font-sans text-sm font-medium tracking-widest uppercase">
                {ch.label}
              </span>
              <IconArrowUpRight
                className="size-5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                stroke={1.25}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}
