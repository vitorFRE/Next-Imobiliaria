export const LISTINGS_ADMIN_STATS = [
  { label: "Total ativos", value: "124" },
  { label: "Aguardando revisão", value: "08" },
  { label: "Valor em carteira", value: "R$ 4.2B" },
  { label: "Visitas agendadas", value: "32" },
] as const

export type ListingAdminStatus = "available" | "hidden"

export type ListingAdminRow = {
  title: string
  listingId: string
  location: string
  status: ListingAdminStatus
  price: string
  imageSrc: string
  imageAlt: string
}

export const LISTINGS_ADMIN_ROWS: ListingAdminRow[] = [
  {
    title: "Vila Monolito II",
    listingId: "EXC-9088",
    location: "Jardim Europa, SP",
    status: "available",
    price: "R$ 24.500.000",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL5BihpDpv93RIEC6fpVHe9d37QUaMpIqB14J49G2GWZECewHo5K9m7ZriYnnBwOLIbyYmPm40tma8c1oRizu7Sd1LvcVAArXuD11GLJ709uR8GliKNhUcJPwKCvPLbezXYM5CU3wXgZ_TvpuXSIHdpRqLk1xQpLLIfw0CMEzYB3t3f-hZY6OV5HsF2ZvzJvikjBoPYq-Vr-gGC_PYuIs8w_XfkSkTifbCc-D_Fu4QAWk33BhFTYXNCpAYy_j3rjtxgsnUbt0h14cO",
    imageAlt: "Villa moderna de luxo ao entardecer.",
  },
  {
    title: "Cobertura Noir",
    listingId: "EXC-1244",
    location: "Itaim Bibi, SP",
    status: "hidden",
    price: "R$ 18.200.000",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDy888peUPHDHXcPYgIE6JATPaZejZC6u_uBLcrvHTtUDs5h2dLeIXv5dbLZBnTn8c5I5HGrsuFJ3rLTBsdZDOReNbaYmOwaHI_T-3TlRaK9mAwWG6dGO-bI1PPYOauNlhkM3lL9vbNOwpysBHisPE13C2TC8J3z-0q7OPFxtUePX8cQYfTnwac0DfVWp_euemCk_L6lzGRXIxd7DOGEBX6vlP-smOwE2hJrFX_lLjwYLHQRZ11Hql6HzcZrVQ382NuBPx0HJU1ZQ7l",
    imageAlt: "Interior de cobertura minimalista com vista urbana.",
  },
  {
    title: "Cubo de Vidro",
    listingId: "EXC-4452",
    location: "Trancoso, BA",
    status: "available",
    price: "R$ 32.000.000",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWcBbjBUu1_1syrPVvL9DuJXI-cGL5eXU-hmKnCdbp0WCJ4i3FJ6DZ97AJASUZn8ncvL1AEv4N6vba3MrKJxPV0LndLnxWyHCBGaKKWFFzIgHLrwHcNXO8oQ5_KmKtmYOzsMn6bSajLVZyKb_3uUC5bhE_b5iFSRbCBFKpxOEuEIDcCsdZ0wXnlw3tTyu68vuNw4otRjfw2ydmD1mJSbN3r2rMZ9kBObVVax3okPSXrqolLzNz1sDftnX9Ug6jsqzyB8rxh88Xd_rl",
    imageAlt: "Casa de vidro em ambiente minimalista.",
  },
  {
    title: "Santuario de Concreto",
    listingId: "EXC-8810",
    location: "Lago Sul, DF",
    status: "available",
    price: "R$ 15.800.000",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANfHWOxjHZc9V1_FmbnmZt35bzOFub2Y0o18yydYlqMFBy_X00tIcHTbF-_3AHobp5g5ivWF4MZRiq6mwRClkBmx5InNS5jH3GmweGzD40j9LnhLslXAR2I1CkVQeRRGf2o4uEHakprhCpxJDw9e7OHmxRvOXsXU2YyL41LPRj0tBL_5i4qhHPkDw-MJYMpF5jKVkbxTtM8BWBqAh-Ljg_Ypf9LHzOC-Zf6rlQeBO5i0GSt-FggvUhFNEm6p5XnU43__gFzwZnF3nd",
    imageAlt: "Fachada brutalista contemporânea ao crepúsculo.",
  },
]
