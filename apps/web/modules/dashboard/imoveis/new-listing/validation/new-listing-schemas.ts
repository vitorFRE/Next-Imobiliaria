import * as z from "zod"

export const newListingStep1Schema = z.object({
  title: z.string().min(1, "Informe o nome da propriedade."),
  priceBrl: z.string().min(1, "Informe o valor."),
  cityState: z.string().min(1, "Informe cidade e estado."),
  status: z.enum(["disponivel", "oculto", "vendido"]),
})

const digits = (label: string) =>
  z
    .string()
    .min(1, `Informe ${label}.`)
    .regex(/^\d+$/, "Use apenas números.")

const decimal = (label: string) =>
  z
    .string()
    .min(1, `Informe ${label}.`)
    .regex(/^\d+([.,]\d+)?$/, "Use um número válido (ex.: 120 ou 120,5).")

export const newListingStep2Schema = z.object({
  bedrooms: digits("os dormitórios"),
  bathrooms: digits("os banheiros"),
  totalAreaM2: decimal("a área total"),
  builtAreaM2: decimal("a área construída"),
  totalPieces: digits("o total de peças"),
  parking: z.enum(["sim", "nao"]),
  descriptionBody: z.string().min(1, "Informe a descrição."),
})
