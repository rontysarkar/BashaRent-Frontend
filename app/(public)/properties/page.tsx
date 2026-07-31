import PropertyCard from "@/components/shared/property-card"
import { getProperties } from "@/services/propertiy.service"
import { IPropertyResponse } from "@/types/property.types"

export default async function page() {
  const properties = await getProperties()
  return (
    <div className="mx-auto max-w-6xl">
      <div className="bg-slate-50/50 py-12">
        <div className="mb-2 flex items-center justify-between">
          <div className="">
            <h2 className="text-md mt-1 font-bold text-slate-800 sm:text-xl">
              All Properties
            </h2>
            <p className="mt-1 text-xs tracking-wide text-slate-500 uppercase sm:text-sm">
              Browse the best available listings
            </p>
          </div>
        </div>
        {!properties.success || properties.data?.length === 0 ? (
          <div className="flex min-h-[400px] w-full items-center justify-center text-center">
            <h3 className="text-xl font-medium text-gray-500">
              No Property Available
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {properties?.data
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
