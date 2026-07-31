import PropertyCard from "@/components/shared/property-card"
import { Button } from "@/components/ui/button"
import { getMyProperties } from "@/services/propertiy.service"
import { IPropertyResponse } from "@/types/property.types"

export default async function MyPropertiesPage() {
  const myProperties = await getMyProperties()

  return (
    <div className="mx-auto max-w-7xl">
      <div className="bg-slate-50/50 py-6">
        <div className="mb-2 flex items-center justify-between"></div>
        {!myProperties.success || myProperties.data?.length === 0 ? (
          <div className="flex min-h-[400px] w-full items-center justify-center text-center">
            <h3 className="text-xl font-medium text-gray-500">
              No Property Available
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {myProperties?.data
              .slice(0, 20)
              .map((property: IPropertyResponse) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
