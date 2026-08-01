"use client"

import { Building2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function CardImageBox({
  url,
  title,
}: {
  url: string
  title: string
}) {
  const [imgError, setImgError] = useState(false)

  const isValidUrl = (url:string)=>{
    if(!url)return false;
    try {
      new URL(url);
      return true;
      
    } catch  {
      return false;
    }
  }
  return url && !imgError ? (
    <Image
      src={isValidUrl(url) ? url : "/placeholder.png"}
      alt={title || "Property Image"}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
      onError={() => setImgError(true)}
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
  ) : (
    <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 text-slate-400">
      <Building2 size={36} className="stroke-[1.5]" />
      <span className="mt-1 text-xs font-medium text-slate-400">
        No Image Available
      </span>
    </div>
  )
}
