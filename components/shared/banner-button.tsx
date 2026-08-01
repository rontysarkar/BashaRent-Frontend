"use client"
import { useAuth } from "@/context/auth-context"
import { TCategoriesData } from "@/types/categories.types"
import { Search } from "lucide-react"
import Link from "next/link"
import React from "react"
import { PropertyDialog } from "../landlord/property-dialog"

export default function BannerButton({
  categories,
}: {
  categories: TCategoriesData[]
}) {
  const { user } = useAuth()
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <Link
        href="/properties"
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        <Search size={16} />
        Browse Property
      </Link>

      {user && user.role === "LANDLORD" && (
        <PropertyDialog mode="create" categories={categories} />
      )}
    </div>
  )
}
