import PropertyDetails from "@/components/properties/property-details"
import { getPropertyDetails } from "@/services/propertiy.service"
import React from "react"
import { toast } from "sonner"

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const result = await getPropertyDetails(id)

  return !result.success ? (
    <div className="flex min-h-[400px] max-w-4xl mx-auto my-20 bg-white items-center justify-center text-center">
      <h3 className="text-xl font-medium text-gray-500">
        No Property Available
      </h3>
    </div>
  ) : (
    <div>
      <PropertyDetails property={result.data} />
    </div>
  )
}
