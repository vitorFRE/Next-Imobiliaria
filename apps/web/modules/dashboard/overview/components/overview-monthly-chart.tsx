"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@workspace/ui/components/chart"

import type { ListingMonthlyCount } from "@/modules/dashboard/imoveis/types/listings-admin"

const chartConfig = {
  count: {
    label: "Imóveis",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

type Props = {
  monthlyData: ListingMonthlyCount[]
}

export function OverviewMonthlyChart({ monthlyData }: Props) {
  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <h3 className="flex items-center gap-4 font-sans text-sm tracking-[0.2em] text-foreground uppercase">
          <span className="h-px w-8 bg-foreground" />
          Imóveis cadastrados por mês
        </h3>
      </div>
      <div className="border border-border/40 bg-muted/30 p-8">
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <BarChart accessibilityLayer data={monthlyData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              allowDecimals={false}
              width={28}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="count" fill="var(--color-count)" radius={2} />
          </BarChart>
        </ChartContainer>
      </div>
    </section>
  )
}
