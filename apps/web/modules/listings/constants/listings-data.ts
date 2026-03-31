import type { PropertyListing } from "@/modules/listings/types/listing"

export const LISTING_PROPERTY_TYPES = [
  "Todos os tipos",
  "Coberturas",
  "Casas",
  "Apartamentos",
] as const

/** Bairros para o filtro da listagem (apenas seleção, sem busca livre). */
export const LISTING_BAIRROS = [
  "Todos os bairros",
  "Jardins",
  "Itaim Bibi",
  "Ipanema",
  "Alphaville",
  "Lago Sul",
  "Nova Lima",
  "Trancoso",
  "Lourdes",
] as const

export const LISTING_PRICE_OPTIONS = [
  "Sem limite",
  "Até R$ 5.000.000",
  "Até R$ 10.000.000",
  "R$ 15.000.000+",
] as const

export const LISTINGS: PropertyListing[] = [
  {
    id: "1",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVtzQc9B8RtGco8I8EOkldAg9GQsni0x70JoYKrvv46SIl4mj4RfkVpiSdZkaz-PUHTbX8IbkhMWvD_ZIjxCTvYR9hMR_eQLP3WdzfBdHsHAd28NvsktnVJ94PfbV53Oh3TurWLsClLxLVjtzcADBCKOdYfpApCtYpOkePxbKYCu7CGRnduRKqKp0jgiDOzMzV5gR8un4tR22MyPqdq80jVUs2H738n09xpQQYDlSXbevHCJCdSk4QAaCRqQEnw1JeBXYP1x2hKbln",
    imageAlt:
      "Sala minimalista com janelas do chão ao teto e vista do skyline de São Paulo ao entardecer.",
    title: "Mansão Suspensa",
    price: "Sob consulta",
    location: "Itaim Bibi, São Paulo",
    badge: "Venda",
    attributes: [
      { icon: "area", label: "200 M²" },
      { icon: "bed", label: "2 QUARTOS" },
      { icon: "car", label: "VAGA" },
    ],
  },
  {
    id: "2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnEtEZqmnXp6dDeIHFyaBOb8wMw1bN_nPynrilcCTph5_3OjR0oKF6giZ9xx3XxfYTBx06gLfvhYkD31ZEzflUlO3I-0V9sYpoDBppvJ9W2LCmffDxwlP-o01QvSoX86DdR_uDB_DxkoRFvgsOrZ5zBln3CeirVInZ5UGg-nO22rVehxyA7gDVraNiwzuhXOEfRJHzd7mKON57oRNUWdpN1b93G-WZHIjSymzSgTgYxoirLqvPXZGE2DbFkLKABB4JvrSUTvEkgHcx",
    imageAlt: "Cobertura com mármore escuro e vista da cidade à noite.",
    title: "Cobertura Sky",
    price: "R$ 15.200.000",
    location: "Ipanema, Rio de Janeiro",
    badge: "Venda",
    staggerMd: true,
    attributes: [
      { icon: "area", label: "850M²" },
      { icon: "bed", label: "5 SUÍTES" },
      { icon: "pool", label: "PISCINA" },
    ],
  },
  {
    id: "3",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyfxYhEyDihPvhCiuSqYMBx-VLTGvliRP10O6Zff1gaTESQ3TNwaNfOqQOsCcZ62jljcyG-uuA0asts7In1htPgh7NdXHZ4iWfJl0i5IA-lu0JFwlsge39bxkdHeSdVNfCHYdWikpJrbIEin66fBw5VVUQJaXWmi_2IEHhnCjPqgTwfVzesFEPY7OQkanLo-xhF7dRmmTC4qvzpL6uT_BnOkblf9-BHmV0p7_qngHqhMoVCuhH0gmMeq8xFDQ-hZnpxcFhaTMfUsx7",
    imageAlt:
      "Casa contemporânea com revestimento metálico escuro e madeira, jardim minimalista.",
    title: "Casa Concreto",
    price: "R$ 6.900.000",
    location: "Lago Sul, Brasília",
    badge: "Venda",
    attributes: [
      { icon: "area", label: "480M²" },
      { icon: "bed", label: "3 SUÍTES" },
      { icon: "deck", label: "GOURMET" },
    ],
  },
  {
    id: "4",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP676y3aKeKn8tZev6wSpNKiH7riCb3wOBR5BltdMVBZMspjBxMO1b0N1xqPzx0Mp9mf2-xB-q600a9jaJjiFDiq_-WmU8RrjNI02fLN6xQfQnxU32926m1ozP7iTETij6PmBptJKPrzDXX5rxe1pssUIQSZzdbnQUnBH4PQW5K2K4UMcrTVTaVn0g2XMRICQfn20Rqz8FZRkyB6wH_MD31cyiFMmJgq8vOs9uU8exfJeV2Kur-44Q5LdtP1QJHj9Z7RzQB4HmDoRm",
    imageAlt:
      "Sala minimalista com portas de vidro para vista de mata, pé-direito alto.",
    title: "Refúgio Urbano",
    price: "R$ 11.500.000",
    location: "Nova Lima, Belo Horizonte",
    badge: "Venda",
    attributes: [
      { icon: "area", label: "720M²" },
      { icon: "forest", label: "PRESERVAÇÃO" },
    ],
  },
  {
    id: "5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIjS_odANQemLzZWn8wAL2Ub1ep3zS71dh3deLn1yewPEHBkJ6NPDETUh7-DV1L0vVRdxAuKRvXd5IZQadrBwmMkSK7m_0Ev-RRWcI5JZiLLRFOO_D0gRmGiWDQsHd2LQMYWRwnIyoERv2c7Objo-nWSbNYpg821H2F2GFYkl6_EF3H8bqgLtV0h5z3GPGLaQdXVy_4hZAszJLl1zVf8AfwYiCJg2RQvm1D8gtIsKDjSqa9Gh7rM3lb9KXADXAwgWJQPs-btnCRwIG",
    imageAlt:
      "Residência frente ao mar com piscina infinita e linhas brancas limpas.",
    title: "Villa Oceânica",
    price: "R$ 19.800.000",
    location: "Trancoso, Bahia",
    badge: "Venda",
    staggerMd: true,
    attributes: [
      { icon: "area", label: "1.200M²" },
      { icon: "waves", label: "PÉ NA AREIA" },
    ],
  },
  {
    id: "6",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACiAvi25eOU9JXrEetN3hIXcnoQhPHVhqVlT-ThwwGRQBjb2X3oy-3GHqeNQmPOcAbRkwvJaDM4MD7iuSxFLRdrdefp3SvdT7u6W47fhkWYlsZf-8yYJAUT-Rt9oSFsNxhnnVkD5zJm3KoSLVceBRSvT7PCRfR4NOhXNoxrAUXDFd1X6dmljkyl1dm7our2jX9xZgsdCAJaYj5PzYAYAeitV4ar-cc5R4axoywRCTHJvWokaOSelTJNoaVzSCCXPQ_fJSoh6p9YBRW",
    imageAlt:
      "Escadaria em mármore preto e vidro em apartamento duplex.",
    title: "Duplex Galeria",
    price: "R$ 5.300.000",
    location: "Lourdes, Belo Horizonte",
    badge: "Venda",
    attributes: [
      { icon: "area", label: "310M²" },
      { icon: "apartment", label: "DUPLEX" },
    ],
  },
]
