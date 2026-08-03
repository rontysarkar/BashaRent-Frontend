import { IPropertyResponse } from "@/types/property.types"
import PropertyCard from "../shared/property-card"
import { getProperties } from "@/services/property.service"

export default async function PropertyList({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined }
}) {
  const res = await getProperties({query})
  const properties = res?.success ? res?.data : []

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {properties?.map((property: IPropertyResponse) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
