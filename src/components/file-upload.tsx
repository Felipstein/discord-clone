'use client'

import { OurFileRouter } from '@/app/api/uploadthing/core'
import { UploadDropzone } from '@/lib/uploadthing'
import Image from 'next/image'

export interface FileUploadProps {
  endpoint: keyof OurFileRouter
  value: string
  onChange: (url?: string) => void
}

export function FileUpload({ endpoint, value, onChange }: FileUploadProps) {
  const fileType = value?.split('.').pop()

  if (value && fileType !== 'pdf') {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
      </div>
    )
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].fileUrl)
      }}
      onUploadError={(error: Error) => {
        console.log(error)
      }}
    />
  )
}
