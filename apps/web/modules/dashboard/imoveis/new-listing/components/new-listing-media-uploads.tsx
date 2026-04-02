"use client"

import { useState } from "react"

import { NewListingCoverUpload } from "./new-listing-cover-upload"
import { NewListingGalleryUpload } from "./new-listing-gallery-upload"

type Props = {
  onUploadingChange?: (uploading: boolean) => void
}

export function NewListingMediaUploads({ onUploadingChange }: Props) {
  const [coverUploading, setCoverUploading] = useState(false)
  const [galleryUploading, setGalleryUploading] = useState(false)

  function handleCoverUploadingChange(uploading: boolean) {
    setCoverUploading(uploading)
    onUploadingChange?.(uploading || galleryUploading)
  }

  function handleGalleryUploadingChange(uploading: boolean) {
    setGalleryUploading(uploading)
    onUploadingChange?.(coverUploading || uploading)
  }

  return (
    <div className="space-y-10">
      <NewListingCoverUpload onUploadingChange={handleCoverUploadingChange} />
      <NewListingGalleryUpload onUploadingChange={handleGalleryUploadingChange} />
    </div>
  )
}
