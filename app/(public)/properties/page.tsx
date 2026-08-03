import PropertyList from "@/components/properties/property-list"
import PropertyQueryInput from "@/components/properties/property-query-input"
import PropertySkeleton from "@/components/properties/property-skeleton"
import { Suspense } from "react"

export default async function PropertyPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const query = await searchParams;
  return (
    <div className="mx-auto max-w-6xl">
      <div className="bg-slate-50/50 py-12">
        <div className="mb-2 text-center md:flex items-center justify-between">
          <div className=" ">
            <h2 className="text-md mt-1 font-bold text-slate-800 sm:text-xl">
              All Properties
            </h2>
            <p className="mt-1 text-xs tracking-wide text-slate-500 uppercase sm:text-sm">
              Browse the best available listings
            </p>
          </div>
          <PropertyQueryInput />
        </div>

        <Suspense fallback={<PropertySkeleton />}>
          <PropertyList query={query} />
        </Suspense>
      </div>
    </div>
  )
}
