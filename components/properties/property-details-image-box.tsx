"use client"

import { Building2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function PropertyDetailsImageBox({
  url,
  title,
}: {
  url: string
  title: string
}) {
  const [imgError, setImgError] = useState(false)

  const isValidUrl = (url: string) => {
    if (!url) return false
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }
  return (
    <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xs md:aspect-[21/9]">
      {url && !imgError ? (
        <Image
          src={isValidUrl(url) ? url : "/placeholder.png"}
          alt={title}
          fill
          priority
          sizes="60vw"
          onError={() => setImgError(true)}
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 text-slate-400">
          <Building2 size={56} className="stroke-[1.2]" />
          <span className="mt-2 text-sm font-medium text-slate-400">
            No Image Uploaded for this Property
          </span>
        </div>
      )}
    </div>
  )
}
