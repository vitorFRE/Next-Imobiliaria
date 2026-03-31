"use client"

import { NewListingDraftProvider } from "../context/new-listing-draft-context"
import { NewListingWizard } from "./new-listing-wizard"

export function NewListingPageContent() {
  return (
    <NewListingDraftProvider>
      <div className="mx-auto w-full max-w-7xl flex-1 pb-20">
        <NewListingWizard />
      </div>
    </NewListingDraftProvider>
  )
}
