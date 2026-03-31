"use client"

import { useState } from "react"

import { NewListingPreviewAside } from "./new-listing-preview-aside"
import { NewListingStepBasicForm } from "./new-listing-step-basic-form"
import { NewListingStepFeaturesForm } from "./new-listing-step-features-form"
import { NewListingStepIndicator } from "./new-listing-step-indicator"
import { NewListingStepMediaForm } from "./new-listing-step-media-form"

const STEP_COPY: Record<
  1 | 2 | 3,
  { kicker: string; title: string }
> = {
  1: {
    kicker: "Novo registro de imóvel",
    title: "1. Informações básicas",
  },
  2: {
    kicker: "Novo registro de imóvel",
    title: "2. Características",
  },
  3: {
    kicker: "Novo registro de imóvel",
    title: "3. Mídia e finalização",
  },
}

export function NewListingWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const copy = STEP_COPY[step]

  return (
    <>
      <header className="mb-12 flex flex-col gap-6 border-b border-border/40 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="mb-2 block font-sans text-[11px] tracking-widest text-muted-foreground uppercase">
            {copy.kicker}
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl">
            {copy.title}
          </h1>
        </div>
        <NewListingStepIndicator step={step} />
      </header>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {step === 1 ? (
            <NewListingStepBasicForm onNext={() => setStep(2)} />
          ) : null}
          {step === 2 ? (
            <NewListingStepFeaturesForm
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          ) : null}
          {step === 3 ? (
            <NewListingStepMediaForm onBack={() => setStep(2)} />
          ) : null}
        </div>
        <NewListingPreviewAside />
      </div>
    </>
  )
}
