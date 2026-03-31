import Link from "next/link"

import { IconMail, IconPhone, IconShare } from "@tabler/icons-react"

import { HomeContainer } from "@/modules/home/components/home-container"
import { BRAND } from "@/modules/core/constants/site"

const footerNav = [
  {
    title: "Navegação",
    links: [
      { href: "/imoveis", label: "Imóveis" },
      { href: "/contato", label: "Contato" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { href: "#", label: "FAQ" },
      { href: "#", label: "Privacidade" },
      { href: "#", label: "Termos de Uso" },
    ],
  },
  {
    title: "Redes",
    links: [
      { href: "#", label: "Instagram" },
      { href: "#", label: "LinkedIn" },
    ],
  },
] as const

export function HomeFooter() {
  return (
    <footer className="w-full border-t border-luxury-band bg-luxury-footer">
      <HomeContainer className="flex flex-col items-start justify-between gap-10 py-12 md:flex-row md:items-center">
        <div className="flex flex-col gap-6">
          <div className="font-heading text-xl font-black text-primary uppercase">
            {BRAND}
          </div>
          <p className="max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
            Ajudamos você a comprar e vender imóveis com informação clara e
            acompanhamento em cada etapa.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
          {footerNav.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-primary uppercase">
                {col.title}
              </h4>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </HomeContainer>
      <HomeContainer className="flex flex-col items-center justify-between gap-4 border-t border-luxury-band py-8 md:flex-row">
        <p className="font-sans text-sm text-muted-foreground">
          © {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.
        </p>
        <div className="flex gap-8 text-muted-foreground">
          <IconShare
            className="size-5 cursor-pointer transition-colors hover:text-primary"
            stroke={1.25}
            aria-hidden
          />
          <IconMail
            className="size-5 cursor-pointer transition-colors hover:text-primary"
            stroke={1.25}
            aria-hidden
          />
          <IconPhone
            className="size-5 cursor-pointer transition-colors hover:text-primary"
            stroke={1.25}
            aria-hidden
          />
        </div>
      </HomeContainer>
    </footer>
  )
}
