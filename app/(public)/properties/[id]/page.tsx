import PropertyDetails from "@/components/properties/property-details"
import { getPropertyDetails } from "@/services/property.service"
import React from "react"
import { toast } from "sonner"

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const {resultStatus,resultDetails} = await getPropertyDetails(id)

  return !resultDetails.success ? (
    <div className="mx-auto my-20 flex min-h-[400px] max-w-4xl items-center justify-center bg-white text-center">
      <h3 className="text-xl font-medium text-gray-500">
        No Property Available
      </h3>
    </div>
  ) : (
    <div>
      <PropertyDetails rentalStatus={resultStatus}  property={resultDetails.data} />
    </div>
  )
}
