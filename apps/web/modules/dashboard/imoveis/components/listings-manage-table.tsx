import Image from "next/image"

import { Button } from "@workspace/ui/components/button"
import {
  IconEdit,
  IconEye,
  IconEyeOff,
  IconTrash,
} from "@tabler/icons-react"

import type { ListingAdminRow } from "../constants/listings-admin-mock"

function StatusCell({ status }: { status: ListingAdminRow["status"] }) {
  const available = status === "available"
  return (
    <div className="flex items-center gap-2">
      <span
        className={`size-1.5 ${available ? "bg-primary" : "bg-muted-foreground"}`}
      />
      <span
        className={`font-sans text-[10px] font-bold tracking-widest uppercase ${available ? "text-foreground" : "text-muted-foreground"}`}
      >
        {available ? "Disponível" : "Oculto"}
      </span>
    </div>
  )
}

function RowActions({ row }: { row: ListingAdminRow }) {
  const showVisibilityOn = row.status === "hidden"
  return (
    <div className="flex justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-9 rounded-none text-muted-foreground hover:text-foreground"
        title="Editar"
      >
        <IconEdit className="size-5" aria-hidden />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-9 rounded-none text-muted-foreground hover:text-foreground"
        title={showVisibilityOn ? "Exibir" : "Esconder"}
      >
        {showVisibilityOn ? (
          <IconEye className="size-5" aria-hidden />
        ) : (
          <IconEyeOff className="size-5" aria-hidden />
        )}
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-9 rounded-none text-muted-foreground hover:text-destructive"
        title="Excluir"
      >
        <IconTrash className="size-5" aria-hidden />
      </Button>
    </div>
  )
}

export function ListingsManageTable({ rows }: { rows: ListingAdminRow[] }) {
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
              ),
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
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg leading-tight font-bold tracking-tight text-foreground uppercase">
                      {row.title}
                    </h2>
                    <p className="mt-1 font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
                      Codigo: {row.listingId}
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
                <StatusCell status={row.status} />
              </td>
              <td className="py-8">
                <span className="font-heading text-sm font-bold text-foreground">
                  {row.price}
                </span>
              </td>
              <td className="py-8 text-right">
                <RowActions row={row} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
