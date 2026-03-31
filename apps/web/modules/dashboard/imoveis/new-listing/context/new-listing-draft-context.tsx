"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import {
  createEmptyNewListingDraft,
  type NewListingDraft,
} from "../types/new-listing-draft"

type NewListingDraftContextValue = {
  draft: NewListingDraft
  updateDraft: (partial: Partial<NewListingDraft>) => void
  resetDraft: () => void
}

const NewListingDraftContext = createContext<NewListingDraftContextValue | null>(
  null,
)

export function NewListingDraftProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<NewListingDraft>(createEmptyNewListingDraft)

  const updateDraft = useCallback((partial: Partial<NewListingDraft>) => {
    setDraft((d) => ({ ...d, ...partial }))
  }, [])

  const resetDraft = useCallback(() => {
    setDraft(createEmptyNewListingDraft())
  }, [])

  const value = useMemo(
    () => ({ draft, updateDraft, resetDraft }),
    [draft, updateDraft, resetDraft],
  )

  return (
    <NewListingDraftContext.Provider value={value}>
      {children}
    </NewListingDraftContext.Provider>
  )
}

export function useNewListingDraft() {
  const ctx = useContext(NewListingDraftContext)
  if (!ctx) {
    throw new Error("useNewListingDraft must be used within NewListingDraftProvider")
  }
  return ctx
}
