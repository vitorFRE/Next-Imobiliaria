import Image from "next/image"

import { ListingsManageRowActions } from "@/modules/dashboard/imoveis/components/listings-manage-table-actions"
import { ListingsManageStatusCell } from "@/modules/dashboard/imoveis/components/listings-manage-table-status"
import type { ListingAdminRow } from "@/modules/dashboard/imoveis/types/listings-admin"

type Props = {
  rows: ListingAdminRow[]
}

export function ListingsManageTable({ rows }: Props) {
  if (rows.length === 0) {
    return (
      <p className="py-16 text-center font-sans text-sm text-muted-foreground">
        Nenhum imóvel cadastrado. Use &quot;Adicionar novo imóvel&quot; para
        incluir o primeiro anúncio.
      </p>
    )
  }

  return (
    <div className="overflow-x-auto [scrollbar-width:thin]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-border/30">
            {["Propriedade", "Localização", "Status", "Valor", "Ações"].map(
              (label, i) => (
                <th
                  key={label}
                  className={`pb-6 font-sans text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ${i === 4 ? "text-right" : ""}`}
                >
                  {label}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/10">
          {rows.map((row) => (
            <tr
              key={row.listingId}
              className="group transition-colors hover:bg-muted/30"
            >
              <td className="py-8">
                <div className="flex items-center gap-6">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-muted">
                    <Image
                      src={row.imageSrc}
                      alt={row.imageAlt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg leading-tight font-bold tracking-tight text-foreground uppercase">
                      {row.title}
                    </h2>
                    <p className="mt-1 font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
                      Código: {row.listingCode}
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-8">
                <span className="font-sans text-xs tracking-wider text-muted-foreground uppercase">
                  {row.location}
                </span>
              </td>
              <td className="py-8">
                <ListingsManageStatusCell status={row.status} />
              </td>
              <td className="py-8">
                <span className="font-heading text-sm font-bold text-foreground">
                  {row.price}
                </span>
              </td>
              <td className="py-8 text-right">
                <ListingsManageRowActions row={row} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
