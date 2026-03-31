import Image from "next/image"

import { IconQuote } from "@tabler/icons-react"

import { Avatar, AvatarImage } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"

import { HomeContainer } from "@/modules/home/components/home-container"
import {
  CTA_DECOR_IMAGE,
  HOMEPAGE_STATS,
  TESTIMONIAL_MAIN,
  TESTIMONIAL_SIDE,
} from "@/modules/home/constants/content"

export function HomeTestimonials() {
  return (
    <section className="bg-luxury-band py-32">
      <HomeContainer>
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="mb-4 block font-sans text-xs font-medium tracking-[0.3em] text-primary/60 uppercase">
            Depoimentos
          </span>
          <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            O que dizem nossos clientes
          </h2>
        </div>
        <div className="grid auto-rows-min grid-cols-1 gap-6 md:grid-cols-12">
          <Card className="overflow-visible py-0 md:col-span-8">
            <CardContent className="flex flex-col gap-8 p-12">
              <IconQuote
                className="size-12 text-primary/20 md:size-14"
                stroke={1}
              />
              <p className="font-sans text-2xl leading-relaxed font-light italic md:text-3xl">
                &ldquo;{TESTIMONIAL_MAIN.quote}&rdquo;
              </p>
              <div className="mt-auto flex shrink-0 items-center gap-4 pt-4">
                <Avatar className="size-16 shrink-0 rounded-none">
                  <AvatarImage
                    src={TESTIMONIAL_MAIN.avatar}
                    alt={TESTIMONIAL_MAIN.name}
                    className="grayscale"
                  />
                </Avatar>
                <div>
                  <p className="font-heading font-bold text-primary">
                    {TESTIMONIAL_MAIN.name}
                  </p>
                  <p className="font-sans text-xs tracking-widest text-luxury-ink-muted uppercase">
                    {TESTIMONIAL_MAIN.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full overflow-visible bg-primary py-0 text-primary-foreground md:col-span-4">
            <CardContent className="flex min-h-0 flex-1 flex-col items-center justify-center gap-8 p-12 text-center">
              {HOMEPAGE_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="font-heading text-6xl font-extrabold">
                    {stat.value}
                  </div>
                  <p className="max-w-[220px] font-sans text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="overflow-visible bg-luxury-panel py-0 md:col-span-4">
            <CardContent className="flex flex-col gap-8 p-12">
              <p className="mb-6 text-lg leading-relaxed font-light">
                &ldquo;{TESTIMONIAL_SIDE.quote}&rdquo;
              </p>
              <div className="mt-auto flex shrink-0 items-center gap-4 pt-2">
                <Avatar className="size-12 shrink-0 rounded-none" size="sm">
                  <AvatarImage
                    src={TESTIMONIAL_SIDE.avatar}
                    alt={TESTIMONIAL_SIDE.name}
                    className="grayscale"
                  />
                </Avatar>
                <div>
                  <p className="font-heading text-sm font-bold text-primary">
                    {TESTIMONIAL_SIDE.name}
                  </p>
                  <p className="font-sans text-[10px] tracking-widest text-luxury-ink-muted uppercase">
                    {TESTIMONIAL_SIDE.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden py-0 md:col-span-8">
            <CardContent className="relative z-10 grid gap-8 p-12 md:grid-cols-[minmax(0,1fr)_minmax(0,33%)] md:items-center">
              <div>
                <h3 className="mb-4 font-heading text-2xl font-bold">
                  Pronto para o próximo capítulo?
                </h3>
                <p className="mb-8 max-w-sm font-light text-luxury-ink-muted">
                  Fale conosco para agendar uma consultoria privada com nosso
                  time.
                </p>
                <Button className="h-auto px-8 py-4 font-heading text-xs font-extrabold tracking-widest uppercase">
                  Fale conosco
                </Button>
              </div>
              <div className="relative hidden min-h-[220px] w-full opacity-20 grayscale transition-opacity group-hover:opacity-40 md:block">
                <Image
                  src={CTA_DECOR_IMAGE}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </HomeContainer>
    </section>
  )
}
