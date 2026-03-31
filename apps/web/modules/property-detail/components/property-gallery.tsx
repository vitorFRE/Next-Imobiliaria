"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

import type { PropertyGallerySlide } from "@/modules/property-detail/types/property-detail"
import { cn } from "@workspace/ui/lib/utils"

type PropertyGalleryProps = {
  slides: PropertyGallerySlide[]
}

export function PropertyGallery({ slides }: PropertyGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" })
  }, [])

  const onScroll = () => {
    const el = scrollerRef.current
    if (!el || el.clientWidth === 0) return
    const i = Math.round(el.scrollLeft / el.clientWidth)
    setIndex(Math.min(Math.max(i, 0), slides.length - 1))
  }

  return (
    <section className="group relative">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className={cn(
          "flex h-[min(716px,85vh)] snap-x snap-mandatory overflow-x-auto scroll-smooth",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {slides.map((slide, i) => (
          <div
            key={`${slide.image}-${i}`}
            className="relative h-full min-w-full snap-center overflow-hidden bg-muted"
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1400px) 1348px, 100vw"
              priority={i === 0}
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-luxury-deep/95 via-luxury-deep/35 to-transparent p-8 md:p-12">
              <span className="mb-2 block font-sans text-xs tracking-widest text-primary/70 uppercase">
                {slide.label}
              </span>
              <p className="font-heading text-4xl font-extrabold tracking-tight text-primary md:text-6xl">
                {slide.heading}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Slide anterior"
        onClick={() => scrollByDir(-1)}
        className="absolute top-1/2 left-0 z-10 hidden -translate-y-1/2 bg-black/40 p-3 text-primary opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/60 group-hover:opacity-100 md:block md:p-4"
      >
        <IconChevronLeft className="size-8 md:size-10" stroke={1.25} />
      </button>
      <button
        type="button"
        aria-label="Próximo slide"
        onClick={() => scrollByDir(1)}
        className="absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 bg-black/40 p-3 text-primary opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/60 group-hover:opacity-100 md:block md:p-4"
      >
        <IconChevronRight className="size-8 md:size-10" stroke={1.25} />
      </button>
      <div className="pointer-events-none absolute right-0 bottom-10 z-10 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 w-12 transition-colors",
              i === index ? "bg-primary" : "bg-primary/30",
            )}
          />
        ))}
      </div>
    </section>
  )
}
