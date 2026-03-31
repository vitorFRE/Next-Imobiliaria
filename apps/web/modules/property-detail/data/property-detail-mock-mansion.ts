import type { PropertyDetail } from "@/modules/property-detail/types/property-detail"

/** Conteúdo editorial completo para o imóvel em destaque (id alinhado à listagem). */
export const PROPERTY_DETAIL_MANSION: PropertyDetail = {
  id: "1",
  title: "Mansão Suspensa",
  location: "Itaim Bibi, São Paulo",
  price: "Sob consulta",
  gallery: [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVtzQc9B8RtGco8I8EOkldAg9GQsni0x70JoYKrvv46SIl4mj4RfkVpiSdZkaz-PUHTbX8IbkhMWvD_ZIjxCTvYR9hMR_eQLP3WdzfBdHsHAd28NvsktnVJ94PfbV53Oh3TurWLsClLxLVjtzcADBCKOdYfpApCtYpOkePxbKYCu7CGRnduRKqKp0jgiDOzMzV5gR8un4tR22MyPqdq80jVUs2H738n09xpQQYDlSXbevHCJCdSk4QAaCRqQEnw1JeBXYP1x2hKbln",
      imageAlt:
        "Sala minimalista com janelas do chão ao teto e vista do skyline de São Paulo ao entardecer.",
      label: "Itaim Bibi, São Paulo",
      heading: "Mansão Suspensa",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC7DL99oS6KwiRx8BGGeVqsytKbw52-_WRFGnUFl2WRyzinz3cxz1iIBjhc32IpGu_M0Wyia2uRpOT39nD8D-I5bUZmYDIxzgtnT4WaWJT0IORg6q_nwHVGTSPIXOreRhUrtuJGMOsuamPWQe2wXJs84MlWTGDVGjkWTwVHlP-QK_TaDctVbgcg2OAGWTsQfHJNuMoeU8WIl0LIHUMXsxmp6t88-ocQIj0-23eiRjKc1gxLnyhVQDeAh2B5TbJy9yd8fCWYbyU1Ra4W",
      imageAlt:
        "Cozinha gourmet com mármore escuro e armários pretos foscos em apartamento amplo.",
      label: "Espaço Gourmet",
      heading: "Design Atemporal",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAO5wqz5jng6y8_G8rOxOyYb8Pas7lQhLRYINer3x4jvS5_3muKVlv6oDWbEPLaJmVTiXXpWoA4Xpi0HkReZtBmymCAXYXNY-Q-5IjR1pA5RMD-4AfYBc5SjnaCbsz3dNAJZZmiux6YqpEETSr9Mlx8eHYR2g6QgMpSUM1o73lxNFSutT5X64bddJZnDQeAeY_qSGz0w9gsWD3gfxueHWXXKRer5LfK_lmn12mqRuav01aUwFceCEO4160zHolihxm_hGgMA_a4Ja7a",
      imageAlt:
        "Suíte master com vista panorâmica da cidade e roupa de cama em tons neutros.",
      label: "Suíte Master",
      heading: "Conforto Absoluto",
    },
  ],
  specs: [
    { label: "Área Total", value: "200,00 m²" },
    { label: "Área Construída", value: "66,20 m²" },
    { label: "Dormitórios", value: "2 Quartos" },
    { label: "Banheiros", value: "2" },
    { label: "Peças Totais", value: "7 Peças" },
    { label: "Estacionamento", value: "Sim" },
  ],
  descriptionTitle: "Residência no Itaim Bibi",
  description: [
    "Localizada no Itaim Bibi, esta residência em altura integra bem as áreas sociais e oferece terraço privativo com vista ampla para a cidade.",
    "Acabamentos em mármore travertino, automação e climatização nos ambientes. A área íntima conta com suítes com closet walk-in e banheiros bem distribuídos.",
  ],
  features: [
    { icon: "bed", label: "2 Quartos confortáveis" },
    { icon: "bath", label: "2 Banheiros modernos" },
    { icon: "car", label: "Vaga para estacionar" },
    { icon: "grid", label: "7 Peças bem distribuídas" },
  ],
  map: {
    embedQuery: "Itaim Bibi, São Paulo, SP",
    cardTitle: "Bairro e entorno",
    cardDescription:
      "Próximo ao Parque do Povo e com acesso a serviços, comércio e transporte na região.",
  },
}
